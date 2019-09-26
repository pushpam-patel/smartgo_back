let mongoose= require('mongoose');

let HospitalUser = mongoose.model('HospitalUser',{
    email:{
        type:String
    },
    pincode:{
        type:Number   
    },
    password:{
        type:String
    }
})

module.exports = { HospitalUser }