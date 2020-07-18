const express = require('express')
const path = require('path')
const hbs =  require('hbs')

const news = require('./utils/news')
const app = express()

const PORT = process.env.PORT || 3000

const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
const publicDir = path.join(__dirname, "../public")

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDir))
app.get('/', (req, res)=>{
    res.render('', {
    })
})
app.get('/api/news', (req, res)=>{
    news.getNews((err, newsData)=>{
        if(err) throw err
        let news = []
        newsData.body.articles.forEach((row)=>{
            news.push(row)            
        })
        res.send(news)

    })
  
})

app.listen(PORT, ()=>{
    console.log('Server listening at port '+ PORT)
})