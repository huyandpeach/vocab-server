const vocabController = require('../controllers/vocabController')

const vocabRouter = (app) => {
    app.route('/api/vocabs/random')
        .get(vocabController.getRandomVocabs)

    app.route('/api/vocabs')
        .get(vocabController.viewAllVocabs)
        .post(vocabController.createNewVocab)

    app.route('/api/vocabs/:id')
        .get(vocabController.viewVocabById)
        .put(vocabController.updateVocabById)
        .delete(vocabController.deleteVocabById)
}

module.exports = vocabRouter
