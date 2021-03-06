import express from 'express'
import path from 'path'
import { logger, requestTime } from './middlewares.js'
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)

app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features', active: 'features'})
})



// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })

// app.get('/download', (req, res) => {
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })



app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})