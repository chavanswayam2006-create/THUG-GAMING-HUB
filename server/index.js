import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'db.json');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from 'public' folder for the backend Admin UI
app.use(express.static(path.join(__dirname, 'public')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin.html')));

const PORT = 3001;
// DB Helper
const readDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const writeDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');

// --- TOURNAMENTS ---
app.get('/api/tournaments', (req, res) => {
  try {
    const db = readDB();
    res.json(db.tournaments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/tournaments', (req, res) => {
  try {
    const { name, game, date, time, entryFee, prizePool, maxSlots, description, bannerUrl, registrationUrl } = req.body;
    const db = readDB();
    const newTournament = {
      id: Date.now(),
      name, game, date, time, entryFee, prizePool, maxSlots, description, bannerUrl, registrationUrl,
      createdAt: new Date().toISOString()
    };
    db.tournaments.push(newTournament);
    writeDB(db);
    res.json({ id: newTournament.id, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/tournaments/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const db = readDB();
    db.tournaments = db.tournaments.filter(t => t.id !== id);
    writeDB(db);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- BOOKINGS ---
app.get('/api/bookings', (req, res) => {
  try {
    const db = readDB();
    res.json(db.bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/bookings', (req, res) => {
  try {
    const { customerName, phone, date, timeSlot, station, duration, amount, foodCharges, notes } = req.body;
    const db = readDB();
    const newBooking = {
      id: Date.now(),
      customerName, phone, date, timeSlot, station, duration, amount,
      foodCharges: foodCharges || 0,
      notes,
      createdAt: new Date().toISOString()
    };
    db.bookings.push(newBooking);
    writeDB(db);
    res.json({ id: newBooking.id, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/bookings/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { timeSlot, amount, foodCharges } = req.body;
    const db = readDB();
    const index = db.bookings.findIndex(b => b.id === id);
    if (index !== -1) {
      if (timeSlot) db.bookings[index].timeSlot = timeSlot;
      if (amount !== undefined) db.bookings[index].amount = amount;
      if (foodCharges !== undefined) db.bookings[index].foodCharges = foodCharges;
      writeDB(db);
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/bookings/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const db = readDB();
    db.bookings = db.bookings.filter(b => b.id !== id);
    writeDB(db);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`THUG Gaming Hub API (JSON Storage) running on http://localhost:${PORT}`);
});
