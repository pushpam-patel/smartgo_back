let mongoose = require ('mongoose');

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://smartgo:smartgo123@ds157857.mlab.com:57857/smartgo');

module.exports={mongoose}
