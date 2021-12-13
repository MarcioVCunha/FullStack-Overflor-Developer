<h1>FullStackOverflow Developer</h1>

Helo my friends, here is the back of my 'FullStackOverflow Developer' project. In this project, i wanted to create an API where you can singin, login send and get questions.

<h1> Technologies used</h1>

<img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' />

<img src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' />

<h1> How to use </h1>

To use this API you have to call the routes in the front, like this

    Post User: /users
    Post Question: /questions
    Post Answer: /questions/:id - id = id of the question

    Get one Question: /question:id - id = id of the question
    Get all Questions without answer: /questions

<h1> Creating your own database </h1>

You can find everything you need to create yout database in the database.sql archive.

<h1> Connecting with database </h1>

There is a env.example archive, in there you will find everything you need to set the connection with your own databse.

Type in your own database informations and change the name of the archive to .env

<h1> Running the commands </h1>

To start the database, just use the command

    npm start

and you should be ready to go.