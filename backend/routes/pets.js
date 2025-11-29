import express from 'express';
import { 
  createPet, 
  getAllPets, 
  getPet, 
  updatePet, 
  patchStatus, 
  deletePet,
  searchPets,
  bulkInsert
} from '../controllers/petController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       required:
 *         - name
 *         - species
 *         - age
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the pet
 *         name:
 *           type: string
 *           description: The name of the pet
 *         species:
 *           type: string
 *           description: Dog, Cat, etc.
 *         breed:
 *           type: string
 *           description: Breed of the pet
 *         age:
 *           type: number
 *           description: Age of the pet
 *         status:
 *           type: string
 *           description: Available, Adopted, Pending
 *       example:
 *         name: Barky
 *         species: Dog
 *         breed: Beagle
 *         age: 3
 *         status: Available
 */

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: The Pet managing API
 */

/**
 * @swagger
 * /api/v1/pets:
 *   get:
 *     summary: Get all pets
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: The list of all pets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */
router.get('/', getAllPets);

/**
 * @swagger
 * /api/v1/pets/search:
 *   get:
 *     summary: Search pets by name, species, or breed
 *     tags: [Pets]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: The search term (e.g. ?q=dog)
 *     responses:
 *       200:
 *         description: The search results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */
router.get('/search', searchPets);

/**
 * @swagger
 * /api/v1/pets/{id}:
 *   get:
 *     summary: Get a single pet by ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet ID
 *     responses:
 *       200:
 *         description: The pet description
 *       404:
 *         description: Pet not found
 */
router.get('/:id', getPet);

/**
 * @swagger
 * /api/v1/pets:
 *   post:
 *     summary: Create a new pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: The pet was successfully created
 */
router.post('/', createPet);

/**
 * @swagger
 * /api/v1/pets/bulk:
 *   post:
 *     summary: Bulk insert multiple pets
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: Pets inserted successfully
 */
router.post('/bulk', bulkInsert);

/**
 * @swagger
 * /api/v1/pets/{id}:
 *   put:
 *     summary: Update a pet (Full Update)
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: The pet was updated
 *       404:
 *         description: Pet not found
 */
router.put('/:id', updatePet);

/**
 * @swagger
 * /api/v1/pets/{id}:
 *   patch:
 *     summary: Partial update (Update Status)
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: Adopted
 *     responses:
 *       200:
 *         description: Status updated
 */
router.patch('/:id', patchStatus);

/**
 * @swagger
 * /api/v1/pets/{id}:
 *   delete:
 *     summary: Delete a pet
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet ID
 *     responses:
 *       200:
 *         description: The pet was deleted
 *       404:
 *         description: Pet not found
 */
router.delete('/:id', deletePet);

export default router;