const { validationResult } = require('express-validator');
const User = require('../models/user');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, username, email, password, role } = req.body;

  try {
    //if user exist
    const isEmailExist = await User.findOne({ email });
    const isUsernameExist = await User.findOne({ username });
    if (isEmailExist)
      res.status(400).json({ errors: [{ msg: 'user is exist' }] });
    if (isUsernameExist)
      res.status(400).json({ errors: [{ msg: 'username is used' }] });

    //get user gravatar
    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    });

    let user = new User({
      firstName,
      lastName,
      email,
      avatar,
      role,
      password
    });
    console.log('hi', password);

    //hash password
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    //return jwt
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360 * 10 },
      (err, token) => {
        if (err) throw err;
        res.send({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
};
