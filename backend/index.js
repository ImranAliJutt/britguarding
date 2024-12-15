const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 or an environment variable

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded payloads

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Backend API");
});

// Example endpoint to fetch data
app.get("/api/offices", (req, res) => {
  const offices = [
    { city: "London", description: "Main Office" },
    { city: "Manchester", description: "Branch Office" },
    { city: "Birmingham", description: "Branch Office" },
  ];
  res.json(offices);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
