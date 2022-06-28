const mongoose = require('mongoose');

// table Schema
const tableSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const dummyTable = module.exports = mongoose.model('dummyTable', tableSchema);

// Get dummyTable
module.exports.getDummyTable = (callback, limit) => {
	dummyTable.find(callback).limit(limit);
}

// Add dummyTable
module.exports.addDummyTable = (record, callback) => {
	dummyTable.create(record, callback);
}

// Update dummyTable
module.exports.updateDummyTable = (id, record, options, callback) => {
	var query = {_id: id};
	var update = {
		name: record.name
	}
	dummyTable.findOneAndUpdate(query, update, options, callback);
}


// Delete dummyTable
module.exports.removeDummyTable = (id, callback) => {
	var query = {_id: id};
	dummyTable.remove(query, callback);
}