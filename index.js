const express = require('express')
const app = express();
const port = 3000;
let scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}, {name: "Matt", score: 666}];

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/scores', (req,res) => {
    res.statusCode = 200;
    scores.sort((a,b) => b.score - a.score);
    console.log(scores);
    let topScores = scores.slice(0,3);
    res.send(topScores);
});

app.post('/scores', (req,res) => {
    res.statusCode = 201;
    console.log(req.body)
    scores.push(req.body);
    res.setHeader("content-type", "application/json");
    res.end();
});

app.listen(3000, () => console.log('Server is running'));