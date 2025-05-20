const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/current-day', (req, res) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    res.json({ day: days[today.getDay()] });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 