import express from 'express';

const router = express.Router();

router.get('*', (req, res) => {
  res.redirect("https://github.com/CAU-OSS-2019/webuffet");
});

export default router;
