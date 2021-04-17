const app = require('express')()
const consign = require('consign')
require('dotenv').config()
const PORT = process.env.PORT || 8081

consign()
    .include('./config/middleware.js')
    .then('./config/db.js')
    .into(app)

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT} ~(￣▽￣)~*`)
})