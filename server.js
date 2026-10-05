const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (_, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});
app.get("/hobbies", (_, res) => {
  res.send("I cycle, go boating, and play guitar.");
});
app.get("/skills", (_, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

app.get("/api/profile", (_, res) => {
  res
    .set("Content-Type", "application/json")
    .json({
      name: "Camper Bot",
      hobbies: ["cycling", "boating", "guitar"],
      skills: ["JavaScript", "Node.js", "Express.js"],
    });
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});

