# YME-Hackathon-group-12-

How to run the app:

*** Prerequisites: ***
a) Ensure you have python/python3, installed on your local machine
b) You have django installed, use the command: pip install django
https://docs.djangoproject.com/en/1.8/howto/windows/
c) You have node.js and npm (package manager) installed, check link on how to:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


*** Starting the web app ***
1. cd into hack_app
2. type command: npm install 
3. Step 2 installs all dependencies required to run the project on your local machine
3. run server by typing the following into the terminal (current dir is hack_app): python3 ./manage.py runserver
4. In another terminal cd into 'frontend', type the command: npm run dev
5. When the server is successfully running, click on the url to view the web page.
6. You should see 'Testing react code' displayed at the root url.
7. Add the endpoint '/api' to the end of the root url to view the backend interface and REST api.
