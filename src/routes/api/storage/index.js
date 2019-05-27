/**
 * Router for https://api.webuffet.net/storage
 */

import express from 'express';
import ThemeListMiddleware from 'Middleware/ThemeListMiddleware';
import ThemeCreateMiddleware from 'Middleware/ThemeCreateMiddleware';
import ThemeUpdateMiddleware from 'Middleware/ThemeUpdateMiddleware';
import ThemeDeleteMiddleware from 'Middleware/ThemeDeleteMiddleware';

const router = express.Router();

// load all themes of the user
router.get('/user', async (req, res) => {
  const req_json = req.body;
  const middleware = new ThemeListMiddleware();

  if (!req_json.hasOwnProperty('auth')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      const theme_list = await middleware.getList(req_json.auth);

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

  if (!req_json.hasOwnProperty('auth') || !req_json.hasOwnProperty('theme_url')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      const created_theme_id = await middleware.create(req_json.auth, req_json.theme_url);

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

  if (!req_json.hasOwnProperty('auth') || !req_json.hasOwnProperty('theme')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      await middleware.update(req_json.auth, req_json.theme);

      res.json({ err: false });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// delete specific theme
router.delete('/user/theme', async (req, res) => {
  const req_json = req.body;
  const middleware = new ThemeDeleteMiddleware();

  if (!req_json.hasOwnProperty('auth') || !req_json.hasOwnProperty('theme_id')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      await middleware.delete(req_json.auth, req_json.theme_id);

      res.json({ err: false });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// invalid request
router.all('*', (req, res) => {
  res.status(404).json({ err: true, msg: "invalid request" });
});

export default router;
