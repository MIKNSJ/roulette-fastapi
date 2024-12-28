from typing import Union, Annotated
from fastapi import FastAPI, Request, Depends, Form, HTTPException, Response
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import utilities, authentication, models, schemas
from sqlalchemy.orm import Session
from database import SessionLocal, engine



models.Base.metadata.create_all(bind=engine)
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


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
async def login_account(response: Response, username: Annotated[str, Form()], password: Annotated[str, Form()], db: Session=Depends(get_db)):
    db_user = utilities.get_user(db, username)
    if not db_user:
        raise HTTPException(status_code=404, detail="This username does not exist.")

    if not authentication.verify_passwords(password, db_user.password):
        raise HTTPException(status_code=404, detail="This password is incorrect.")

    curr_token = authentication.generate_session_token();
    session_schema = schemas.TableSession(session_id=curr_token, user_username=db_user.username)
    utilities.create_session(db, session_schema)
    response = RedirectResponse("/", status_code=303)
    response.set_cookie(key="token", value=curr_token)
    return response


@app.get("/account/logout")
async def logout_account(request: Request):
    return templates.TemplateResponse(request=request, name="logout.html")


@app.get("/account/logout/confirm")
async def logout_account_confirm(request: Request, response: Response, db: Session=Depends(get_db)):
    utilities.delete_session(db, request.cookies.get("token"))
    response = RedirectResponse("/", status_code=303)
    response.delete_cookie("token")
    return response 


@app.get("/account/create", response_class=HTMLResponse)
def read_create(request: Request):
    return templates.TemplateResponse(request=request, name="create.html")


@app.post("/account/create/result")
async def create_account(username: Annotated[str, Form()], password: Annotated[str, Form()], db: Session=Depends(get_db)):
    db_user = utilities.get_user(db, username)
    if db_user:
        raise HTTPException(status_code=404, detail="This username already exists.")

    userSchema = schemas.User(username=username, password=authentication.generate_hashed_password(password), chips=1000000)
    utilities.create_user(db, userSchema)
    return RedirectResponse("/account/login", status_code=303)


@app.get("/bet/chips")
async def read_coins(request: Request, db: Session=Depends(get_db)):
    curr_token = request.cookies.get("token")

    if curr_token != None:
        db_session = utilities.get_session(db, curr_token)
        curr_user = db_session.user_username
        db_user = utilities.get_user(db, curr_user)
        chips = db_user.chips
        return {"chips": chips}

    return {"chips": 1000000}


@app.post("/bet/result")
async def update_coins(request: Request, db: Session=Depends(get_db)):
    curr_token = request.cookies.get("token")
    result = await request.json()

    if curr_token != None:
        db_session = utilities.get_session(db, curr_token)
        curr_user = db_session.user_username
        db_user = utilities.get_user(db, curr_user)
        print(result.get("chips"))
        db_user.chips = result.get("chips")
        db.commit()

    return


@app.get("/admin/reset")
async def reset(response: Response, db: Session=Depends(get_db)):
    utilities.delete_all_entries(db)
    response = RedirectResponse("/", status_code=303)
    response.delete_cookie("token")
    return response
