const express = require('express')
const app = express()

const mongoose = require('mongoose')
// const DATABASE_URI = 'mongodb://localhost:27017/vocab-builder'
const DATABASE_URI = 'mongodb+srv://huyng:huyandpeach@cluster1.zgyyrwu.mongodb.net/vocab-builder'


mongoose.connect(DATABASE_URI)
.then(() => console.log('Connected to dtbase successfully !'))
.catch((err) => console.error('Connected to dtbase failed !', err))

app.use(express.json())

const cors = require('cors')

// const corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200
// } 
// app.use(cors(corsOptions))

const cors = require('cors');
app.use(cors());

const route = require('./api/routes/vocabRoute')
route(app)

const PORT = 3000 
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})


