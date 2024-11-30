const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());

// sample data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
  },
];

// sample API create
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("server running !!!");
});

app.listen(port, () => {
  console.log(`server is running at ->${port}`);
});
