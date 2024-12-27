from typing import Union, Annotated
from fastapi import FastAPI, Request, Form, HTTPException, Response
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import bcrypt, secrets



app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Dummy database for local testing purposes. To be replaced with real database.
# entry: {username: str: {password: str, chips: int}}
fake_db = {}
fake_session_db = {}


@app.get("/", response_class=HTMLResponse)
def read_root(request: Request):
    return templates.TemplateResponse(request=request, name="index.html")


@app.get("/account/login", response_class=HTMLResponse)
def read_login(request: Request):
    curr_token = request.cookies.get("token")

    if curr_token != None:
        return RedirectResponse("/account/logout", status_code=303)

    return templates.TemplateResponse(request=request, name="login.html")


@app.post("/account/login/result")
async def login_account(response: Response, username: Annotated[str, Form()], password: Annotated[str, Form()]):
    if username not in fake_db:
        raise HTTPException(status_code=404, detail="This username does not exist.")

    bytePassword = password.encode("utf-8")
    if not bcrypt.checkpw(bytePassword, fake_db[username]["password"]):
        raise HTTPException(status_code=404, detail="This password is incorrect.")

    curr_token = secrets.token_hex(16)
    fake_session_db[curr_token] = username
    response = RedirectResponse("/", status_code=303)
    response.set_cookie(key="token", value=curr_token)
    return response


@app.get("/account/logout")
async def logout_account(request: Request):
    return templates.TemplateResponse(request=request, name="logout.html")


@app.get("/account/logout/confirm")
async def logout_account_confirm(response: Response):
    response = RedirectResponse("/", status_code=303)
    response.delete_cookie("token")
    return response 


@app.get("/account/create", response_class=HTMLResponse)
def read_create(request: Request):
    return templates.TemplateResponse(request=request, name="create.html")


@app.post("/account/create/result")
async def create_account(username: Annotated[str, Form()], password: Annotated[str, Form()]):
    if username in fake_db:
        raise HTTPException(status_code=404, detail="This username already exists.")

    bytes = password.encode('utf-8') 
    salt = bcrypt.gensalt() 
    hashed_password = bcrypt.hashpw(bytes, salt)
    fake_db[username] = {"password": hashed_password, "chips": 1000000}
    return RedirectResponse("/account/login", status_code=303)


@app.get("/bet/chips")
async def read_coins(request: Request):
    curr_token = request.cookies.get("token")

    if curr_token != None:
        # The conditional below is only for building locally.
        # The temporary database resets for each build while the cookie is
        # still intact. So the cookie must be removed first.
        if curr_token not in fake_session_db:
            return RedirectResponse("/account/logout/confirm", status_code=303)

        curr_user = fake_session_db[curr_token]
        chips = fake_db[curr_user]["chips"]
        return {"chips": chips}

    # This return statement is dead unless not building locally.
    return {"chips": 1000000}


#@app.post("/bet/result")
#async def update_coins(request: Request, data: dict):
#    curr_token = request.cookies.get("token")
#
#    if curr_token != None:
#        curr_user = fake_session_db[curr_token]
#        fake_db[curr_user]["chips"] = data["chips"]
#
#    return


@app.post("/bet/result")
async def update_coins(request: Request):
    curr_token = request.cookies.get("token")
    data = await request.json()

    if curr_token != None:
        curr_user = fake_session_db[curr_token]
        fake_db[curr_user]["chips"] = data.get("chips")

    return





#   DEBUGGING FUNCTIONS FOR SWAGGER DOCS
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.post("/test/cookie")
def create_test_cookie(response: Response):
    response.set_cookie(key="testcookie", value="1-c00kie-1")
    return {"message": "Cookie Set"}


@app.get("/test/delete/cookie")
def delete_test_cookie(response: Response):
    response.delete_cookie("testcookie")
    return {"message": "Cookie Removed"}
