const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

const swaggerUi = require('swagger-ui-express')
const apiDocumentation = require('./openapi.json')
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(apiDocumentation))
/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})