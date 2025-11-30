import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
  try {
    const { name, username, password } = req.body
    const exists = await User.findOne({ username })
    if (exists) return res.status(400).json({ message: 'Username already taken.' })

    const hashed = await bcrypt.hash(password, 10)
    const user = new User({ name, username, password: hashed })
    await user.save()
    res.status(201).json({ message: 'User registered successfully!' })
  } catch (err) { res.status(500).json({ message: err.message }) }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) return res.status(400).json({ message: 'Invalid username or password.' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ message: 'Invalid username or password.' })

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.json({ message: 'Logged in successfully!', token })
  } catch (err) { res.status(500).json({ message: err.message }) }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}