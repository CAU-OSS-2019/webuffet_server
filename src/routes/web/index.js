/**
 * Router for https://webuffet.net
 */

import express from 'express';

const router = express.Router();

router.all('*', (req, res) => {
  res.redirect("https://github.com/CAU-OSS-2019/webuffet");
});

export default router;
