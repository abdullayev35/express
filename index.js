const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', (req, res) => {
    fs.readFile('./tsconfig.json', 'utf-8', (err, data) => {
        if (!err) {
            let d = JSON.parse(data)
            res.send(JSON.stringify(d))
        }
    })
})
const server = app.listen(5000)