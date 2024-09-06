


const express = require('express')
const router = express.Router()


let NBAChampHistory = [
  {id: 101, team: "Boston Celtics", year: "2023-24", imageurl:'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',}, 
  {id: 102, team: "Denver Nuggets", year: "2022-23", imageurl: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg'},
  {id: 103, team: "Golden State Warriors", year: "2021-22", imageurl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg'},
  {id: 104, team: "Milwaukee Bucks", year: "2020-21", imageurl: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg'},
  {id: 105, team: "Los Angeles Lakers", year: "2019-20", imageurl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg'},
  {id: 106, team: "Toronto Raptors", year: "2018-19", imageurl: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg'},
  {id: 107, team: "Golden State Warriors", year: "2017-18", imageurl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg'},
  {id: 108, team: "Golden State Warriors", year: "2016-17", imageurl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg'},
];


router.get('/',(req,res)=>{
    res.send(NBAChampHistory)
  })

  router.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    res.send(NBAChampHistory.find((NBAChampHistory)=> NBAChampHistory.id === id));
 })


  router.post('/', (req,res) => {
    console.log(req.body);
   NBAChampHistory.push(req.body)
    res.send(201);
  })


module.exports = router