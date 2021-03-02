const express = require('express')

const app = express()
app.get('', (req, res) => {
  res.send('hello')
  res.end()
})

app.listen(80, () => console.log('listening on port 80'))