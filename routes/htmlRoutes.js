// importing path
const path = require('path');
const router = require('express').Router();



// GET /notes pathing to notes.html file
// HTML GET routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET * paths to index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// exporting router to other modules
module.exports = router;