const mongoose = require('mongoose');
async function conf(db_string) {
  try {
    await mongoose.connect(db_string,{useNewUrlParser: true,useUnifiedTopology: true});
    console.log('=> Database MongoDB: Connected ✔');
    return '';
  } catch(err) {
    throw err;
  }
}

module.exports = conf;