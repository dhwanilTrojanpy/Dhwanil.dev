
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const COUNTER_FILE = 'visitor-count.json';

// Initialize counter file if it doesn't exist
if (!fs.existsSync(COUNTER_FILE)) {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count: 0 }));
}

app.get('/api/visitors', (req, res) => {
  const data = JSON.parse(fs.readFileSync(COUNTER_FILE));
  data.count += 1;
  fs.writeFileSync(COUNTER_FILE, JSON.stringify(data));
  res.json(data);
});

app.listen(3001, '0.0.0.0', () => {
  console.log('Server running on port 3001');
});
