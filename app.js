const express = require('express')
const moment = require('moment')
const path = require('path')
const Students = require('./exports/Students')

const app = express()

const logger = (req,res,next)=> {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    next()
}

app.use(logger)

app.get('/api/students', (req, res) => res.json(Students))

const PORT = 5000

app.listen(process.env.PORT || PORT , ()=>{ console.log('====================================');
console.log(`Server has started on http://127.0.0.1:${PORT}`);
console.log('===================================='); })

