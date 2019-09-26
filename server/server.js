let express = require('express')
let bodyParser = require('body-parser')
let geocoding = new require('reverse-geocoding')
let geo= new require('reverse-geocoding-google')
let cors = require('cors')

let {mongoose} = require ('./db/mongoose.js')

let {User} = require('./models/user.js')
let {TrafficCom} = require('./models/trafficcomp.js')
let {AccidentCom} = require('./models/accidentcomp.js')
let { DailySchedules } = require('./models/dailyschedule.js')
let {PoliceUser} = require('./models/police.js')
let {HospitalUser}= require('./models/hospital.js')

let app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.post('/rgeo',(req,res)=>{
    let lat=req.body.lat
    let long=req.body.long
    
    let config={
        'latitude':lat,
        'longitude':long,
        'key':'AIzaSyCEF1MgrRBaktN47f3Xf_sb1POSHnDunY0'
    }

    geo.location(config, function (err, data){
        res.send(data.results[0].formatted_address)
    });
})

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send(users)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/users', (req, res) => {
    console.log(req.body)

    let user = new User({
        name:req.body.name,
        email:req.body.email,
        aadhar:req.body.aadhar,
        password:req.body.password,
        user_type:req.body.user_type
    })

    user.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/traffic', (req, res) => {
    TrafficCom.find().then((traffic) => {
        res.send(traffic)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/traffic', (req, res) => {
    console.log(req.body)

    let traffic = new TrafficCom({
        date:req.body.date,
        time:req.body.time,
        place:req.body.place,
        level:req.body.level
    })

    traffic.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})


app.get('/accident', (req, res) => {
    AccidentCom.find().then((accident) => {
        res.send(accident)
    }).catch((err) => {
        res.status(400).send(err)
    })
})


app.post('/accident', (req, res) => {
    console.log(req.body)

    let accident = new AccidentCom({
        date:req.body.date,
        time:req.body.time,
        place:req.body.place,
        level:req.body.level
    })

    accident.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/daily', (req, res) => {
    DailySchedules.find().then((daily) => {
        res.send(daily)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/daily', (req, res) => {
    let daily = new DailySchedules({
        date:req.body.date,
        bus:req.body.bus,
        train:req.body.train,
        metro:req.body.metro
    })

    daily.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.listen(port)