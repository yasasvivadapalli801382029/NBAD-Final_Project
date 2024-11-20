const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');
require('dotenv').config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// API Routes
app.use('/api', apiRoutes);

// Serve Angular Frontend
const frontendPath = path.join(__dirname, '../y29-frontend/dist/y29-frontend');
app.use(express.static(frontendPath));

// Default Route for Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Default API Root Response
app.get('/', (req, res) => {
  res.send('Welcome to the Y29 Backend API. Use /api endpoints for data.');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
