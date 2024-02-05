const express = require('express');
const app = express();
const port = 3000;
const budgetData = require('./budget-data.json');

app.use('/', express.static('public'));

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

app.get('/hello', (req, res) => {
    res.send('Hello World!')
}); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});