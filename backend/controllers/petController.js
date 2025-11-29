import Pet from '../models/Pet.js'

// 1. Create a single Pet (POST)
export const createPet = async (req, res) => {
  try {
    const pet = new Pet(req.body)
    await pet.save()
    res.status(201).json(pet)
  } catch (err) { 
    res.status(400).json({ message: err.message }) 
  }
}

// 2. Bulk Insert Pets (POST)
export const bulkInsert = async (req, res) => {
  try {
    const pets = req.body
    if (!Array.isArray(pets) || pets.length === 0) return res.status(400).json({ message: 'Provide an array of pets.' })
    const inserted = await Pet.insertMany(pets)
    res.status(201).json({ message: `${inserted.length} inserted`, data: inserted })
  } catch (err) { 
    res.status(400).json({ message: err.message }) 
  }
}

// 3. Get All Pets (GET)
export const getAllPets = async (req, res) => {
  try { 
    const pets = await Pet.find().sort({ createdAt: -1 }); 
    res.json(pets) 
  } catch (err) { 
    res.status(500).json({ message: err.message }) 
  }
}

// 4. Search Pets (GET) 
export const searchPets = async (req, res) => {
  try {
    const { q } = req.query; 
    if (!q) return res.status(400).json({ message: "Please provide a search query" });

    const pets = await Pet.find({
      $or: [
        { name: { $regex: q, $options: "i" } },     
        { species: { $regex: q, $options: "i" } },  
        { breed: { $regex: q, $options: "i" } }     
      ]
    });
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 5. Get Single Pet by ID (GET)
export const getPet = async (req, res) => {
  try { 
    const pet = await Pet.findById(req.params.id); 
    if(!pet) return res.status(404).json({message:'Pet not found'}); 
    res.json(pet) 
  } catch (err) { 
    res.status(500).json({ message: err.message }) 
  }
}

// 6. Update Pet (PUT)
export const updatePet = async (req, res) => {
  try { 
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    if(!pet) return res.status(404).json({message:'Pet not found'}); 
    res.json(pet) 
  } catch (err) { 
    res.status(400).json({ message: err.message }) 
  }
}

// 7. Patch Status (PATCH)
export const patchStatus = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id)
    if (!pet) return res.status(404).json({ message: 'Pet not found' })
    
    if (req.body.status) pet.status = req.body.status
    
    await pet.save()
    res.json(pet)
  } catch (err) { 
    res.status(400).json({ message: err.message }) 
  }
}

// 8. Delete Pet (DELETE)
export const deletePet = async (req, res) => {
  try { 
    const pet = await Pet.findByIdAndDelete(req.params.id); 
    if(!pet) return res.status(404).json({message:'Pet not found'}); 
    res.json({message:'Deleted successfully'}) 
  } catch (err) { 
    res.status(500).json({ message: err.message }) 
  }
}