import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize DB
const db = new Database(path.join(__dirname, 'database.sqlite'));

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS tournaments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    game TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    entryFee INTEGER NOT NULL,
    prizePool INTEGER NOT NULL,
    maxSlots INTEGER NOT NULL,
    description TEXT,
    bannerUrl TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customerName TEXT NOT NULL,
    phone TEXT NOT NULL,
    date TEXT NOT NULL,
    timeSlot TEXT NOT NULL,
    station TEXT NOT NULL,
    duration INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    foodCharges INTEGER DEFAULT 0,
    notes TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Add column if it doesn't exist
try {
  db.exec("ALTER TABLE bookings ADD COLUMN foodCharges INTEGER DEFAULT 0;");
} catch (e) {
  // Column might already exist, ignore this error.
}

export default db;
