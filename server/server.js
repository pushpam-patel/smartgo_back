let express = require('express')
let bodyParser = require('body-parser')
let geocoding = new require('reverse-geocoding')
let geo= new require('reverse-geocoding-google')
let cors = require('cors')

let {mongoose} = require ('./db/mongoose.js')

let {User} = require('./modedls/user.js')
let {TrafficCom} = require('./model/trafficcomp.js')
let {AccidentCom} = require('./model/accidentcomp.js')
let { DailySchedules } = require('./models/dailyschedules.js')
let {PoliceUser} = require('./models/police.js')
let {HospitalUser}= require('./models/hospital.js')

let app = express()
let port = process.env.PORT || 3000

app.use(bodyparser.json())
app.use(cors())


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

