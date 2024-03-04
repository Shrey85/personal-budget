const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const budgetData = require('./budget-data.json');
const { mongoose, budget } = require('./db'); // Update the path accordingly


app.use(cors());
app.use(express.static('public'));
/*const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    ]
};
*/
app.get('/api/budget', (req, res) => {
    res.json(budget);
});

app.get('/api/budget1', (req, res) => {
    res.json({ myBudget: budgetData.categories });
}); 

app.get('/api/budget', (req, res) => {
    try {
    const uri = 'mongodb://localhost:27017/personal_budget';
    const client = new MongoClient(uri);
      client.connect();
      client.db('personal_budget').collection('budget').find().toArray()
      .then(result => {
        client.close();
          res.json(result);
          
      })
      .catch(error => console.error('Error retrieving data from MongoDB:', error));
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  );

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
}); 

/*// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, budget } = require('./db'); // Update the path accordingly

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to fetch chart data from the database
app.get('/api/chartData', async (req, res) => {
  try {
    const data = await budget.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to add new chart data to the database
app.post('/api/addChartData', async (req, res) => {
  try {
    const { title, budget, color } = req.body;
    const newChartEntry = new budget({ title, budget, color });
    await newChartEntry.save();
    res.json(newChartEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to fetch budget data from the database
app.get('/api/budget', async (req, res) => {
  try {
    // Fetch budget data from MongoDB using Mongoose
    const budgetData = await budget.find();
    res.json(budgetData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
}); */



/* 2nd// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, budget } = require('./db'); // Update the path accordingly

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to fetch chart data from the database
app.get('/api/chartData', async (req, res) => {
  try {
    const data = await budget.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to add new chart data to the database
app.post('/api/addChartData', async (req, res) => {
  try {
    const { title, budget, color } = req.body;
    const newChartEntry = new budget({ title, budget, color });
    await newChartEntry.save();
    res.json(newChartEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to fetch budget data from the database
app.get('/api/budget', async (req, res) => {
  try {
    // Fetch budget data from MongoDB using Mongoose
    const budgetData = await budget.find();
    res.json(budgetData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
}); */


/* old//budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const budgetData = require('./budget-data.json');


app.use(cors());
app.use(express.static('public'));
const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    ]
};

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.get('/budget1', (req, res) => {
    res.json({ myBudget: budgetData.categories });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
}); */


