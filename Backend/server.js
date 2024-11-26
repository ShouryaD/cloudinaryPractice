const express = require('express');
const app = express()
const port = 3000
const host = '127.0.0.1'
const db = require('./dbConfig')
const cors = require('cors')
db()

const userRoute = require('./routes/userRoutes')
app.use(express.json())
app.use(cors())
app.use('/users', userRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port} 😎`)
})