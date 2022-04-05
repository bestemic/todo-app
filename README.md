## Todo Application

This is my main project written in Java, Spring and React, the development of which I anticipate in the coming weeks
depending on time availability. Ultimately, the program is to be a fully web-based task management application. In the
first phase of development, I am going to focus on providing REST API and implementing most of the basic
functionalities. Then the program, following the MVC pattern, will be extended with the frontend part.

#### The application will include operations such as:

- adding, viewing, editing and closing tasks
- login, registration, editing profiles, administrator and user accounts
- assigning categories and creating your own
- searching, sorting and filtering of tasks
- creating groups, sharing tasks, assigning tasks to specyfic user
- viewing the schedule of tasks

## Built With

* Java
* Spring Boot
* MySQL
* React.js
* Bootstrap

## Requirements

* Java 17
* Node.js

## Installation

1. Start the local SQL server, create a database named `tododb`. The application will create the tables needed for
   operation by itself.

2. Clone the repo
   ```sh
   git clone https://github.com/bestemic/todo-app.git
   ```
3. Go to root project directory and build
   ```sh
   ./mvnw clean install
   ```
4. Run Spring-Boot project
   ```sh
   ./mvnw spring-boot:run
   ```
5. On the other terminal move to frontend folder and install required packages
   ```sh
   npm install
   ```
6. Run React.js serwer
   ```sh
   npm start
   ```

## App preview

* Live Todo Aplication will start on: `http://localhost:3000`
* Rest API docimentation will sart with Swagger on `http://localhost:8080/swagger-ui/`

## Contact

Przemysław Pawlik - przemek.pawlik123@gmail.com

Project Link: [https://github.com/bestemic/todo-app](https://github.com/bestemic/todo-app)
