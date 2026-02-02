const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// ----------------- ROOT -----------------
app.get("/", (req, res) => {
  res.send("✅ AI Club Backend is running 🚀");
});

// ----------------- EVENTS -----------------
const events = [
  {
    id: 1,
    title: "AI Bootcamp",
    description: "Hands-on ML & AI workshop for beginners.",
    date: "2026-02-10",
    location: "Auditorium Hall"
  },
  {
    id: 2,
    title: "Hackathon 2026",
    description: "24-hour AI Hackathon with exciting prizes.",
    date: "2026-03-05",
    location: "Innovation Lab"
  },
  {
    id: 3,
    title: "Guest Talk: AI in Industry",
    description: "Industry expert talks about real-world AI usage.",
    date: "2026-03-20",
    location: "Seminar Room"
  }
];

// GET EVENTS
app.get("/events", (req, res) => {
  res.json(events);
});

// ----------------- USERS -----------------
const users = []; // in-memory users (replace with DB later)

// REGISTER
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }

  if (users.find(u => u.email === email)) {
    return res.json({ success: false, message: "Email already exists" });
  }

  users.push({ name, email, password });
  res.json({ success: true, message: "Registration successful" });
});


// EVENT REGISTRATIONS
const registrations = [];

// REGISTER FOR EVENT
app.post("/register-event", (req, res) => {
  const token = req.headers.authorization;
  const { eventId } = req.body;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // simple duplicate check
  const alreadyRegistered = registrations.find(
    r => r.token === token && r.eventId === eventId
  );

  if (alreadyRegistered) {
    return res.json({ message: "Already registered for this event" });
  }

  registrations.push({ token, eventId });

  res.json({ message: "Event registration successful 🎉" });
});


// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.json({ success: false, message: "Invalid email or password" });

  // Dummy token (replace with JWT later)
  const token = "dummy-token-" + Date.now();
  res.json({ success: true, token, message: "Login successful" });
});

// ----------------- START SERVER -----------------
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
