const vocabModel = require('../models/vocabModel')

const viewAllVocabs = async (req, res) => {
    try {
        const vocabs = await vocabModel.find({}).sort({dateTime:-1})
        res.status(200).json(vocabs)
    } catch (err) {
        console.error(err)
    }
}

const createNewVocab = async (req, res) => {
    try {
        const vocab = req.body
        await vocabModel.create(vocab)
        res.status(201).json(vocab)
    } catch (err) {
        console.error(err)
    }
}

const viewVocabById = async (req, res) => {
    try {
        const id = req.params.id
        const vocab = await vocabModel.findById(id)
        res.status(200).json(vocab)
    } catch (err) {
        console.error(err)
    }   
}

const updateVocabById = async (req, res) => {
    try {
        const id = req.params.id
        const updatedData = req.body

        await vocabModel.findByIdAndUpdate(id, updatedData)
        res.json({ message: 'Vocab updated successfully' })
    } catch (err) {
        console.error(err)
        res.status(400).json({ error: "Update failed" })
    }
}

const deleteVocabById = async (req, res) => {
    try {
        const id = req.params.id
        await vocabModel.findByIdAndDelete(id)
        res.json({ message: 'Vocab deleted successfully' })
    } catch (err) {
        console.error(err)
    }
}

const getRandomVocabs = async (req, res) => {
    try {
        const vocabs = await vocabModel.aggregate([{ $sample: { size: 3 } }]);
        res.status(200).json(vocabs);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    viewAllVocabs,
    createNewVocab,
    viewVocabById,
    updateVocabById,
    deleteVocabById,
    getRandomVocabs
}