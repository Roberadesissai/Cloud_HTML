import express from "express";
import fs from "fs";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(200);
  const names = req.query.name;
  console.log(names);
  const email = req.query.email;
  console.log(email);
  const password = req.query.password;
  console.log(password);
  const fileContent = `${names}, ${email}, ${password}`;
  fs.writeFile("users.txt", fileContent, (err) => {
    if (err) throw err;
    console.log("Saved!");
  });
  
});

app.put("/user/robera", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/robera", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/robera", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);

});
