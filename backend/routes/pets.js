import express from 'express'
import {
  createPet, bulkInsert, getAllPets, getPet,
  updatePet, patchStatus, deletePet
} from '../controllers/petController.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

router.post('/', authenticateToken, createPet)
router.post('/bulk', authenticateToken, bulkInsert)
router.get('/', getAllPets)
router.get('/:id', getPet)
router.put('/:id', authenticateToken, updatePet)
router.patch('/:id', authenticateToken, patchStatus)
router.delete('/:id', authenticateToken, deletePet)

export default router
