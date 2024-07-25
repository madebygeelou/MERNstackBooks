import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import booksRoute from './routes/booksRoutes'; // Adjusted import for TypeScript
import { PORT, mongoDBURL } from './config'; // Adjusted import for TypeScript

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req: Request, res: Response) => {
  console.log(req); // Log request for debugging
  return res.status(200).send('Welcome!'); // Correct status code
});

// Books routes
app.use('/books', booksRoute);

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Error connecting to the database:', error);
  });

