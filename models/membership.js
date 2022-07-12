const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    id : String,
    user_id : String,
    total_cost : Number,
    plan_name : String,
    start_date : Date,
    end_date : Date,
    is_inactive : Boolean
})

const MembershipDB = mongoose.model('membership', schema);

module.exports = MembershipDB;