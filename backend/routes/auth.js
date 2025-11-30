import express from 'express'
// IMPORT deleteUser HERE
import { signup, login, deleteUser } from '../controllers/authController.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: "Auth API is working" })
})

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication
 */

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - username
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Lovely
 *               username:
 *                 type: string
 *                 example: user3@example.com
 *               password:
 *                 type: string
 *                 example: 12345
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Missing required fields (Name, Email, or Password)
 *       409:
 *         description: Username or Email already exists
 *       500:
 *         description: Internal Server Error
 */
router.post('/signup', signup)

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login user & get JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: user1@example.com
 *               password:
 *                 type: string
 *                 example: 12345
 *     responses:
 *       200:
 *         description: Login successful. Returns JWT token.
 *       400:
 *         description: Missing username or password
 *       401:
 *         description: Invalid credentials (Wrong password or email not found)
 *       500:
 *         description: Internal Server Error
 */
router.post('/login', login)

/**
 * @swagger
 * /api/v1/auth/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server Error
 */
router.delete('/:id', deleteUser)

export default router