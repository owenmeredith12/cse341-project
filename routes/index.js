const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello world");
});

// ✅ Mount the users router properly
router.use('/users', require('./users'));

module.exports = router;
