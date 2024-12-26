FROM python:3.12.8-slim

WORKDIR /app

COPY ./backend/requirements.txt ./requirements.txt

RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

COPY ./backend/app .

COPY ./frontend/index.html ./templates/index.html

COPY ./frontend/create.html ./templates/create.html

COPY ./frontend/login.html ./templates/login.html

COPY ./frontend/logout.html ./templates/logout.html

COPY ./frontend/styles.css ./static/styles.css

COPY ./frontend/script.js ./static/script.js

COPY ./frontend/assets ./static/assets

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]
