let mongoose = require ("mongoose");

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://pvp_smartgo:pvp@smartgo1@ds157857.mlab.com:57857/smartgo');

module.exports={mongoose}
