const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const usersFilePath = path.join(__dirname, "users.json");

app.use(express.json());

function loadUsers() {
  if (fs.existsSync(usersFilePath)) {
    const data = fs.readFileSync(usersFilePath, "utf-8");
    return JSON.parse(data);
  }
  return [];
}

function saveUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

app.get("/users", (req, res) => {
  const users = loadUsers();
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const users = loadUsers();
  console.log(users[0].id);
  const user = users.find((u) => u.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

app.post("/users", (req, res) => {
  const users = loadUsers();
  const newUser = { id: Date.now().toString(), ...req.body };
  users.push(newUser);
  saveUsers(users);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const users = loadUsers();
  const userIndex = users.findIndex((u) => u.id === req.params.id);
  if (userIndex !== -1) {
    users[userIndex] = { id: req.params.id, ...req.body };
    saveUsers(users);
    res.json(users[userIndex]);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const users = loadUsers();
  const userIndex = users.findIndex((u) => u.id === req.params.id);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    saveUsers(users);
    res.json(deletedUser);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
