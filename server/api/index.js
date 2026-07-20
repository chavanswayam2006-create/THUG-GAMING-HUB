// Vercel serverless function entry point
// This file wraps the Express app so Vercel can run it as a serverless function
import serverless from 'serverless-http';
import app from '../app.js';

export default serverless(app);
