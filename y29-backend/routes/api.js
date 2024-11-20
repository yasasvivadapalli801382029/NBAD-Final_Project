const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/login', authController.login);

router.get('/investment-breakdown', authMiddleware, (req, res) => {
  res.json({
    labels: ["Solar", "Wind"],
    values: [221, 90.7],
    note: "Investment in billions (1H 2024)"
  });
});

router.get('/capacity-additions', authMiddleware, (req, res) => {
  res.json({
    labels: ["Solar", "Wind"],
    values: [428, 1000],
    note: "Capacity in gigawatts (2023)"
  });
});

module.exports = router;
