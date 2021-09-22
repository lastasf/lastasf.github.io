import  express from 'express'

const PORT = process.env.PORT ?? 3000 // проверяет наличие порта по умолчанию иначе 3000
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello 3000!!!</h1>')
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
}) // команда "node index" запустит сервер на выбранном порту