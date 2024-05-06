// Importing necessary modules
const express = require('express');
const cors = require('cors');

// Creating the first Express application
const app1 = express();
app1.use(cors());

// Setting up a route for the first app
app1.get('/api', (req, res) => {
    return res.json({message: "This is from backend"});
});

// Starting the first app on port 8081
app1.listen(8081, () => {
    console.log("Listening on port 8081");
});

// Importing modules for the second application
import expressDefault from 'express';
import Sentry from '@sentry/node';  // Assuming Sentry is imported correctly
import { initializeSentry } from './sentry';

// Creating the second Express application
const app2 = expressDefault();

// Initializing Sentry for error logging
initializeSentry(process.env.SENTRY_DSN);

// Defining routes for the second application
app2.get('/', (req, res) => {
  try {
    // Some code that might throw an exception
    res.send('Handled in GET request');
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).send('An error occurred');
  }
});

app2.post('/', (req, res) => {
  Sentry.captureMessage('Something happened');
  res.send('Handled in POST request');
});

// Starting the second app on port 3000
app2.listen(3000, () => {
  console.log('App listening on port 3000');
});
