var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userTheme:{
    type: Array,
  },
  createdAt : {
    type: String,
    required: true,
  }
});

var UserInfo  = mongoose.model('user', UserSchema);
module.exports = UserInfo ;
