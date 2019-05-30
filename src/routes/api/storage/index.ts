/**
 * Router for https://api.webuffet.net/storage
 */

import express from 'express';
import ThemeListMiddleware from 'Middleware/ThemeListMiddleware';
import ThemeCreateMiddleware from 'Middleware/ThemeCreateMiddleware';
import ThemeUpdateMiddleware from 'Middleware/ThemeUpdateMiddleware';
import ThemeDeleteMiddleware from 'Middleware/ThemeDeleteMiddleware';
import ThumbnailUploadMiddleware from 'Middleware/ThumbnailUploadMiddleware';
import upload from 'Configs/upload';

const router = express.Router();

// load all themes of the user
router.get('/user', async (req, res) => {
  const middleware = new ThemeListMiddleware();

  if (!req.body.hasOwnProperty('auth')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      const theme_list = await middleware.getList(req.body.auth);

      res.json({ err: false, themes: theme_list });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// save new theme
router.post('/user', async (req, res) => {
  const middleware = new ThemeCreateMiddleware();

  if (!req.body.hasOwnProperty('auth') || !req.body.hasOwnProperty('theme_url')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      const created_theme_id = await middleware.create(req.body.auth, req.body.theme_url);

      res.json({ err: false, theme_id: created_theme_id });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// update specific theme
router.put('/user/theme', async (req, res) => {
  const middleware = new ThemeUpdateMiddleware();

  if (!req.body.hasOwnProperty('auth') || !req.body.hasOwnProperty('theme')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      await middleware.update(req.body.auth, req.body.theme);

      res.json({ err: false });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// delete specific theme
router.delete('/user/theme', async (req, res) => {
  const middleware = new ThemeDeleteMiddleware();

  if (!req.body.hasOwnProperty('auth') || !req.body.hasOwnProperty('theme_id')) {
    res.json({ err: true, msg: "invalid parameter" });
  } else {
    try {
      await middleware.delete(req.body.auth, req.body.theme_id);

      res.json({ err: false });
    } catch (err) {
      res.json({ err: true, msg: err });
    }
  }
});

// upload theme thumbnail image and return image url
router.post('/user/thumbnail', (req, res) => {
  const middleware = new ThumbnailUploadMiddleware();

  upload(req, res, (err) => {
    if (err) {
      res.json({ err: true, msg: err.message });
    } else {
      middleware.uploadBase64(req.file.buffer.toString('base64'))
        .then((image_url) => {
          res.json({ err: false, url: image_url });
        })
        .catch((err_msg) => {
          res.json({ err: true, msg: err_msg });
        });
    }
  });
});

// invalid request
router.all('*', (req, res) => {
  res.status(404).json({ err: true, msg: "invalid request" });
});

export default router;
