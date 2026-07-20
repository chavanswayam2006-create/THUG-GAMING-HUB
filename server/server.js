// Server entry point for local dev and Vercel
import app from './app.js';

const PORT = process.env.PORT || 3001;

// When running locally (not on Vercel), start the HTTP server
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`THUG Gaming Hub API running on http://localhost:${PORT}`);
  });
}
