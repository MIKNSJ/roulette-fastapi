# roulette-fastapi

## Overview
The popular casino game featuring a wheel of numbers where you have to predict where the ball will land.

## Video
OUTDATED: Check out a video of the website [here](https://www.youtube.com/watch?v=Sgs9wJHx90s).

NOTE: This video does not include the newer features of user login and save functionality.

## Screenshots
![website](screenshots/roulette_website.png)

## Description
View the old website [here](https://roulette-2024.netlify.app/).

Due to limitations, if you want to view the new verison of the website, then
you have to build the website locally using the docker config files:
dockerfile and docker-compose.yaml. The address of the website when run
locally is just ```localhost```.

This website was made with Bootstrap 5, FastAPI, and SQLite

## Notes
Due to a old build, this website does not have a responsive design. This means
that website will be fully scaled on smaller devices. For the BEST viewing
purposes, I recommend viewing the website on a device with at least 1300px
screen size.

## Contents
- ```README.md```: description of this repository
- ```.gitignore```: ignores unwanted files (garbage collection)
- ```.dockerignore```: ignores unwanted files for the container
- ```frontend```: contains files to style the website
- ```backend```: contains files to maintain user accounts and page routing
- ```docker-compose.yaml```: builds the website locally
- ```dockerfile```: builds a container loaded with FastAPI packages
- ```screenshots```: contains pictures of the website
- ```video```: contains a video of the website
- ```info```: contains notes about the repository

## Contributions
Tools

- WSL2 (Ubuntu 24.04.1)
- Vim + coc.nvim
- npm + live-server (frontend only)
- Docker
- FastAPI + additional python packages (see requirements.txt)
- Bootstrap 5.3.3 CDN
- SQLite + DB Browser

<br>

Assets

Since assets are constantly being updated, please refer to the ```assets``` folder
to find out more.

## Changelog
- Website Version 1.0 established on August 2024
- Website Version 2.0 established on December 2024: Backend Support

## License
Established on August 2024 by MIKNSJ.
