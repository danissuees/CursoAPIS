const express = require('express');
const router = express.Router();

const{
    getEvento,
    getEventos
} = require('../controllers/eventController')

router.get('/api/eventos/', getEventos);
router.get('/api/eventos/:id', getEvento);
module.exports = router;

