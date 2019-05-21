import express from 'express';

const router = express.Router();

// invalid request
router.get('*', (req, res) => {
  res.status(404).json({ err: true, msg: "invalid request" });
});

export { router };
