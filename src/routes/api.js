import express from 'express';
import UserController from 'Controller/UserController';

const router = express.Router();

// load all themes of the user
router.get('/storage/user', async (req, res) => {
  const req_json = req.body;

  // // test for UserController
  // if (!req_json.hasOwnProperty('user')) {
  //   res.json({ err: true, msg: "invalid parameter" });
  // } else {
  //   try {
  //     const user = await UserController.findAndRegister(req_json.user);
  //     res.json(user);
  //   } catch (err) {
  //     res.json({ err: true, msg: err });
  //   }
  // }
});

// invalid request
router.get('*', (req, res) => {
  res.status(404).json({ err: true, msg: "invalid request" });
});

export { router };
