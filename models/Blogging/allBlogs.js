//Author: Navya Jayapal (B00886554)
//Email: nv408879@dal.ca
<<<<<<< HEAD
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BlogsSchema = new Schema({
    id: String,
    userId:String,
    blogTitle: String,
    shortContent:String,
    blogContent: String,
    blogImage:String,
    timeStamp:String
});

const Blogs = new model('Blogs', BlogsSchema);
module.exports = Blogs;
=======
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BlogsSchema = new Schema({
  id: String,
  userId: String,
  blogTitle: String,
  shortContent: String,
  blogContent: String,
  blogImage: String,
  timeStamp: String,
});

const Blogs = new model("Blogs", BlogsSchema);
module.exports = Blogs;
>>>>>>> 51f2d55feb120404f0d33a42deaead4a6f793ec8
