const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI || 'mongodb://127.0.0.1:27017/usersPosts',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = mongoose.connection