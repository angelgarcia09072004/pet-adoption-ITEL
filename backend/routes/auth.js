import express from 'express'
import { signup, login } from '../controllers/authController.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication
 */

/**
 * @swagger
 * /api/auth/signup:
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
 *                 example: Angel Anne Garcia
 *               username:
 *                 type: string
 *                 example: angel123
 *               password:
 *                 type: string
 *                 example: mypassword123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Username already taken
 */
router.post('/signup', signup)

/**
 * @swagger
 * /api/auth/login:
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
 *                 example: angel123
 *               password:
 *                 type: string
 *                 example: mypassword123
 *     responses:
 *       200:
 *         description: Login successful. Returns JWT token.
 *       400:
 *         description: Invalid username or password
 */
router.post('/login', login)

export default router
