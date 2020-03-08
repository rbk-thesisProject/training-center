module.exports = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    //get user by email
    const user = await User.findOne({ email });

    //if user not exist
    //return a valid response
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'invalid credentials' }] });
    }

    //is the password match
    const isMatch = await bcrypt.compare(password, user.password);

    //if the password doesn't match or the role is not 1
    if (!isMatch || user.role != 1) {
      return res.status(400).json({ errors: [{ msg: 'invalid credentials' }] });
    }

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
