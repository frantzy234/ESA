
const express = require('express')
const router = express.Router()



let NBAPlayer = [
  {id: 1, name: 'Dirk Nowitzki', team: "Dallas Mavericks", imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/1717.png',},
  {id: 2, name: 'Ja Morant', team: "Memphis Grizzlies", imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png'},
  {id: 3, name: 'Kobe Bryant', team: "Los Angeles Lakers",imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/977.png'},
  {id: 4, name: 'Luka Doncic', team: "Dallas Mavericks",imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png'},
  {id: 5, name: 'Kevin Durant', team: "Phoenix Suns",imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png'},
  {id: 6, name: 'James Harden', team: "Los Angeles Clippers",imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png'},
  {id: 7, name: 'Scottie Barnes', team: "Toronto Raptors",imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/1630567.png'},
  {id: 8, name: 'Stephen Curry', team: "Golden State Warriors",imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png'},
  {id: 9, name: 'Anthony Edwards', team: "Minnesota Timberwolves",imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/1630162.png'},
  {id: 10, name: 'Trae Young', team: "Atlanta Hawks",imageurl:'https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png'},


];

router.get('/', (req,res)=>{
    res.send(NBAPlayer);
  })
  
router.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    res.send(NBAPlayer.find((NBAPlayer)=> NBAPlayer.id === id));
 })


router.post('/', (req,res) => {
  console.log(req.body);
  NBAPlayer.push(req.body)
  res.send(201);
})






 module.exports = router