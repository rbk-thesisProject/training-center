const express = require('express');
const connectDB = require('./config/db');

//connect DB
connectDB();

const app = express();
app.use(express.json({ extended: false }));
app.use('/api/teacher');
app.use('/api/student');
app.use('/api/admin');

app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));
