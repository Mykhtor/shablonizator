import express  from "express";
import { engine } from "express-handlebars";

const app = express()

app.engine('.hbs', engine({ extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './pages')



app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about' )
})

app.get('/contacts', (req, res) => {
  res.render('contacts')
})




app.get('/', (req, res) => {

})



app.listen(8080, () =>{
  console.log("server is strarting on http://localhost:8080");
  
})