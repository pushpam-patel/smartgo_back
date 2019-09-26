let mongoose= require('mongoose');

let PoliceUser = mongoose.model('PoliceUser',{
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

module.exports = { PoliceUser }