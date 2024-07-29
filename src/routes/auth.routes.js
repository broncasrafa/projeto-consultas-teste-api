var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'b82d912b3032b499ffa295795d1d123f1a74b32d97d0579ac9283717c21dcbc9';

// usuario fake
const users = [
  { username: 'admin', password: bcrypt.hashSync('admin123', 8) },
  { username: 'guest', password: bcrypt.hashSync('guest123', 8) }
]

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(c => c.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '8h' });
    return res.json({token});
  }

  return res.status(401).json({ message: 'Invalid credentials'});
});


module.exports = router;
