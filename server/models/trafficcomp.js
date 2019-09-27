let mongoose = require('mongoose')

let TrafficCom = mongoose.model('TrafficCom', {
    date:{
        type:String
    },
    time:{
        type:String
    },
    place:{
        type:String
    },
    no_of_complaints:{
        type:Number
    },
    level:{
        type:String
    },
    who_requested:{
        type:Array
    },
    police_sent:{
        type:Array
    }
})

module.exports = { TrafficCom }