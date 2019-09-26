let mongoose = require('mongoose')

let DailySchedules = mongoose.model('DailySchedules', {
    date:{
        type:String
    },
    bus:{
        type:Array
    },
    train:{
        type:Array
    },
    metro:{
        type:Array
    }
})

module.exports = { DailySchedules }