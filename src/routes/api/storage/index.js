/**
 * Router for https://api.webuffet.net/storage
 */

import express from 'express';
import ThemeListMiddleware from 'Middleware/ThemeListMiddleware';
import ThemeCreateMiddleware from 'Middleware/ThemeCreateMiddleware';
import ThemeUpdateMiddleware from 'Middleware/ThemeUpdateMiddleware';

const router = express.Router();

// load all themes of the user
router.get('/user', async (req, res) => {
  const req_json = req.body;
  const middleware = new ThemeListMiddleware();

  if (!req_json.hasOwnProperty('user')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      const theme_list = await middleware.getList(req_json.user);

      res.json({ err: false, themes: theme_list });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// save new theme
router.post('/user', async (req, res) => {
  const req_json = req.body;
  const middleware = new ThemeCreateMiddleware();

  if (!req_json.hasOwnProperty('user') || !req_json.hasOwnProperty('theme_url')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      const created_theme_id = await middleware.create(req_json.user, req_json.theme_url);

      res.json({ err: false, theme_id: created_theme_id });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// update specific theme
router.put('/user/theme', async (req, res) => {
  const req_json = req.body;
  const middleware = new ThemeUpdateMiddleware();

  if (!req_json.hasOwnProperty('user') || !req_json.hasOwnProperty('theme')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      await middleware.update(req_json.user, req_json.theme);

      res.json({ err: false });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// invalid request
router.get('*', (req, res) => {
  res.status(404).json({ err: true, msg: "invalid request" });
});

export default router;
