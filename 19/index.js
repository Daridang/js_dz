const {
  getRandomName,
  getRandomAddress,
  getRandomDate,
  getRandomNumber,
} = require("random-data-generator-764");

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const viewsFilePath = path.join(__dirname, "viewsCount.json");

function loadViews() {
  if (fs.existsSync(viewsFilePath)) {
    const data = fs.readFileSync(viewsFilePath, "utf-8");
    return JSON.parse(data);
  }
  return { "/": 0, "/about": 0 };
}

function saveViews(views) {
  fs.writeFileSync(viewsFilePath, JSON.stringify(views, null, 2));
}

let views = loadViews();

app.get("/", (req, res) => {
  views["/"] += 1;
  saveViews(views);
  res.send(`
        <h1>Home Page</h1>
        <p>Views: ${views["/"]}</p>
        <a href="/about">Go to About Page</a>
    `);
});

app.get("/about", (req, res) => {
  views["/about"] += 1;
  saveViews(views);

  const randomName = getRandomName();
  const randomAddress = getRandomAddress();
  const randomDate = getRandomDate();
  const randomNumber = getRandomNumber();

  const randomDataHTML = `
        <h2>Random Data</h2>
        <p><strong>Name:</strong> ${randomName}</p>
        <p><strong>Address:</strong> ${randomAddress}</p>
        <p><strong>Date:</strong> ${randomDate}</p>
        <p><strong>Number:</strong> ${randomNumber}</p>
    `;

  res.send(`
        <h1>About Page</h1>
        <p>Views: ${views["/about"]}</p>
        ${randomDataHTML}
        <a href="/">Go to Home Page</a>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
