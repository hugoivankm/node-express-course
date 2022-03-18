const express = require("express");
const app = express();

const MockUserData = [{ name: "Mark" }, { name: "Jill" }];

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

app.listen(8000, function () {
  console.log("Server is running");
});
