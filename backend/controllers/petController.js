import Pet from '../models/Pet.js'

export const createPet = async (req, res) => {
  try {
    const pet = new Pet(req.body)
    await pet.save()
    res.status(201).json(pet)
  } catch (err) { res.status(400).json({ message: err.message }) }
}

export const bulkInsert = async (req, res) => {
  try {
    const pets = req.body
    if (!Array.isArray(pets) || pets.length === 0) return res.status(400).json({ message: 'Provide an array of pets.' })
    const inserted = await Pet.insertMany(pets)
    res.status(201).json({ message: `${inserted.length} inserted`, data: inserted })
  } catch (err) { res.status(400).json({ message: err.message }) }
}

export const getAllPets = async (req, res) => {
  try { const pets = await Pet.find().sort({ createdAt: -1 }); res.json(pets) }
  catch (err) { res.status(500).json({ message: err.message }) }
}

export const getPet = async (req, res) => {
  try { const pet = await Pet.findById(req.params.id); if(!pet) return res.status(404).json({message:'Pet not found'}); res.json(pet) }
  catch (err) { res.status(500).json({ message: err.message }) }
}

export const updatePet = async (req, res) => {
  try { const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true }); if(!pet) return res.status(404).json({message:'Pet not found'}); res.json(pet) }
  catch (err) { res.status(400).json({ message: err.message }) }
}

export const patchStatus = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id)
    if (!pet) return res.status(404).json({ message: 'Pet not found' })
    if (req.body.status) pet.status = req.body.status
    await pet.save()
    res.json(pet)
  } catch (err) { res.status(400).json({ message: err.message }) }
}

export const deletePet = async (req, res) => {
  try { const pet = await Pet.findByIdAndDelete(req.params.id); if(!pet) return res.status(404).json({message:'Pet not found'}); res.json({message:'Deleted'}) }
  catch (err) { res.status(500).json({ message: err.message }) }
}
