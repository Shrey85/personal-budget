/* // db.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/yourdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const budgetSchema = new Schema({
    title: { type: String, required: true },
    budget: { type: Number, required: true },
  });
  

const db = mongoose.connection;
const Budget = mongoose.model('Budget', budgetSchema);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = mongoose;
module.exports = { mongoose, Budget }; */

// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/personal-budget', {
  // Remove useNewUrlParser and useUnifiedTopology options
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const budgetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  budget: { type: Number, required: true },
  color: { type: String, required: true, match: /^#([ED4523]{6})$/ },
});

const budget = mongoose.model('budget', budgetSchema);

module.exports = { mongoose, budget };
