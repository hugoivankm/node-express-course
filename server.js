const express = require("express");
const app = express();


const MockUserData = [{ name: "Mark" }, { name: "Jill" }];

const bodyParser = require("body-parse");
app.use(bodyParser.json());

app.get("/users", function (req, res) {
  res.json({
    success: true,
    manage: "successfully got users. Nice!",
    users: MockUserData,
  });
});

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    manage: "got one user",
    user: req.params.id,
  });
});

app.post('/login', function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mokckPassword = "superSecret";

  if (username === mockUsername && password === mokckPassword) {
    res.json({
      success: true,
      message: "Password and user name match!",
      token: "encrypted token goes here"
    })
  } else {
    res.json({
      success: false,
      message: "Password and user name do not match!"
    })
  }
});

app.listen(8000, function () {
  console.log("Server is running");
});
