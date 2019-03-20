const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 5000;
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://apple:lonewolf@localhost:5432/apple');

// const User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   email: Sequelize.STRING
// });

// sequelize.sync()
//         .then(() => User.create({
//             username: 'janedoe',
//             email: 'janedoe@gmail.com'
//         }))
//         .then(jane => {
//         console.log(jane.toJSON());
// });

app.use(morgan("combined"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/auth", (req, res) => {
    // res.send("Google Auth");

    // TODO: extract code from URL using a polyfill
    // TODO: fetch id_token using code
    // TODO: fetch user info using id_token
    // TODO: save user info to db

    const id_token = "1223";

    res.writeHead(301, {Location: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=',id_token});
    res.end();
});

app.listen(port, () => {
    console.log(`Server is now running on port ${port}!!!`);
});


// https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjVmZTJkNTQxYTQyODJiN2FlMzYyOGZhMDc0ZGQ4YmVhNmRhNWIxOWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5ODY1MjU3Mzg1MzItYjIxZnRyM2N2bXFvYWNwMTE3aWhzYXRkZ2U3OTl1dGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5ODY1MjU3Mzg1MzItYjIxZnRyM2N2bXFvYWNwMTE3aWhzYXRkZ2U3OTl1dGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIyMzU2ODM4NTU2MDA5NDkzMjIiLCJoZCI6ImdldHByb3Blcmx5LmNvbSIsImVtYWlsIjoibmloYWxAZ2V0cHJvcGVybHkuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJXdXVfRXoxTDlvUlB2RkJoWk91NkRnIiwibmFtZSI6Ik5paGFsIEthdWwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1NOHFLb2Y4OWlWSS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBYy9JUDZ6cC1uRWRJMC9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiTmloYWwiLCJmYW1pbHlfbmFtZSI6IkthdWwiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU1MjgyMDMxMiwiZXhwIjoxNTUyODIzOTEyfQ.sI5UNb3cNLqHr9M3QdUQZeB4BRgetnYcz1zxR8j3TFDGf5iJx18SmeIn3szJPAO8kLlEElRUDSrPDHVz3Sjjdh9HgBoiAgBzsADSInkZi7E821zBMbPaGEqorem2lgJKjmgiAbmog6tfk2OH_m7dAOOhgBpkprKEnbuPIxTIgzJNvzAlb83A-R7NNRtKIqZBExdr22ipV7Tser917Key-tHcz0U0nx5nMMKgagQEaO3yJMMzpJyNyh3-ST10nG_hcYzwW1C5mfeRvQG9BTvyAi3EmPxDb_Ddzmq1_4EPu6-OJu_P45i3KxbuDxJjWoBLn46lyQAzaw0scflLKPVafQ