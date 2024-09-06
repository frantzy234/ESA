const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000



const userRoute = require('./routes/NBAPlayer')
const TeamsRoute = require('./routes/Teams')
const HomeRoute = require('./routes/Home')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())






app.set('view engine', 'ejs');
app.set('views', 'views')

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/teams/champ', (req,res) => {
    res.render('team');
})



app.use('/NBAPlayer', userRoute);
app.use('/Teams', TeamsRoute);
app.use('/Home', HomeRoute);






app.listen(PORT,()=>{
    console.log(`Server is now running...${PORT}`)
})



