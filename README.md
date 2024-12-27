# roulette-fastapi

## Overview
The popular casino game featuring a wheel of numbers where you have to predict where the ball will land.

## Video
OUTDATED: Check out a video of the website [here](https://www.youtube.com/watch?v=Sgs9wJHx90s).

## Screenshots
![website](screenshots/roulette_website.png)

## Description
View the old website [here](https://roulette-2024.netlify.app/).

Due to limitations, if you want to view the new website, then you can build the
website locally using the docker config files: dockerfile and
docker-compose.yaml. The address of the website when run locally is just
```localhost```.

This website was made with Vanilla JS, Bootstrap 5, and FastAPI.

## Notes
Due to a old layout, this website does not have a responsive design. This means
that the website will be fully scaled on smaller devices. For the BEST viewing
purposes, I recommend loading the website on a device with at least the screen
size of 1300px.

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

## Contributions
Tools

- WSL2 (Ubuntu 11.4.0)
- Vim + coc.nvim
- npm + live-server
- Docker
- FastAPI + additional python packages
- Bootstrap 5.3.3 CDN

<br>

Assets

Since assets are constantly being updated, please refer to the ```assets``` folder
to find out more.

## Changelog
- Website Version 1.0 established on August 2024

## License
Established on August 2024 by MIKNSJ.
