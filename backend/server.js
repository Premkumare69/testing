const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname + "/static")))

const sql = mysql
    .createPool({
        host: "localhost",
        user: "root",
        password: "password",
        database: "forms",
    })
    .promise();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/student.html")
})

app.get("/getdata", async (req, res) => {
    const query = "select * from forms";
    const [output] = await sql.query(query);
    res.send(output);
});

app.post("/postdata", async (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const DateOfBirth = req.body.DateOfBirth;
    const Address1 = req.body.Address1;
    const Address2 = req.body.Address2;
    const Gender = req.body.Gender;
    const Nationality = req.body.Nationality;
    const District = req.body.District
    const State = req.body.State;
    const Country = req.body.Country;
    const ZipCode = req.body.ZipCode;
    console.log(FirstName);
    console.log(LastName);
    console.log(PhoneNumber);

    const query = "insert into forms(FirstName,LastName,Email,PhoneNumber,DateOfBirth,Address1,Address2,Gender,Nationality,District,State,Country,ZipCode) values(?,?,?,?,?,?,?,?,?,?,?,?,?)";

    const output = await sql.query(query, [FirstName, LastName, Email, PhoneNumber, DateOfBirth, Address1, Address2, Gender, Nationality, District, State, Country, ZipCode]);
    res.send("Posted successfully......");
});

app.listen(3000, (e) => {
    console.log("Started Listening......");
});