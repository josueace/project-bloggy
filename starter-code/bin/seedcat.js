
const mongoose = require('mongoose');
const Category = require('../models/Category');

const dbName = 'project-bloggy';
mongoose.connect(`mongodb://localhost/${dbName}`);



const categories = [
 
  {
    name : "IronHack",
  },
  {
    name : "Software",
  },
   {
    name : "Hardware",
  },
  {
    name : "Music",
  },
  {
    name : "Travel",
  },
  {
    name : "Food",
  },
  {
    name : "Clothing",
  },
];

Category.collection.drop();

Category.create(categories, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${categories.length} categories`)
  mongoose.connection.close();
});