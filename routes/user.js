const express = require('express');
const userController = require('../controllers/user');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

const router = express.Router();

router.post(
  '/signup',
  [
    check('firstName', 'first name is required').notEmpty(),
    check('lastName', 'last name is required').notEmpty(),
    check('username', 'username is required').notEmpty(),
    check('password', 'username is required')
      .notEmpty()
      .isLength({ min: 6 }),
    check('email', 'please enter a valid email').isEmail(),
    check('role', 'role is required').notEmpty()
  ],
  userController.signUp
);

router.get('/', auth, (req, res) => {
  console.log('hi');
  res.send('hi');
});

module.exports = router;
