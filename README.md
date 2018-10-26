# healthypets
This project using Angular, Node, Express.
To make this project to work you need to install Angular, Node, Express.

After you installed above items, you need to install all the dependencies that are needed.
you can just "npm install", it will install all the dependencies.
You need to "npm install" in the healthypets folder, and you need to "npm install" in the healthyApp folder.

To start the project,
in the healthypets folder, you need to start server by "node server" or if you have nodemon installed, by "nodemon server.js"

With server on, then open another terminal.

To start an angular project, with that opened new terminal go to healtyApp folder. Command "ng build --watch",
the projects opens in http://localhost:8000/



Functionality that works,
Search Bar works by searching by product's name.

Filtering by catergory works within subcatergory works.(In app.components.ts, subcategories and categories are switched in the file... didn't have enough time to clean it up.)

Sort By works with in filtered products. Reset button works.

shows how many products in that category or filtered or searched.

added product's image in json data that was repopulated by using json data.

This project is responsive.

There is yellow button at bottom right corner that has functionality that scrolls to top. yellow button only shows when you were scrolled down when page is long.
