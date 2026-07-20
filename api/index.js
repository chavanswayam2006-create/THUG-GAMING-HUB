// Vercel serverless function entry point
import serverless from 'serverless-http';
import app from '../server/app.js'; // Adjust path relative to this file

export const handler = serverless(app);
