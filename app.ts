const express = require("express")
require("dotenv").config()

const app = express()

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
