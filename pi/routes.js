const express = require('express');
const WyneAgent = require('../src/core/agent');

const router = express.Router();
const agent = new WyneAgent();

router.get('/status', (req, res) => {
res.json({ status: agent.status });
});

router.post('/execute', (req, res) => {
const { task } = req.body;
const result = agent.execute(task);
res.json(result);
});

module.exports = router;
