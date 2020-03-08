const express = require('express');
const signin = require('../controllers/signin');
const { check } = require('express-validator');

const router = express.Router();

router.post(
  '/',
  [
    check('password', 'username is required')
      .notEmpty()
      .isLength({ min: 6 }),
    check('email', 'please enter a valid email').isEmail()
  ],
  signin
);

module.exports = router;
