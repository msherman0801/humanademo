const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection succesful')
})

const usersRouter = require('./routes/users');
const plansRouter = require('./routes/plans');
app.use('/users', usersRouter)
app.use('/plans', plansRouter)

app.use(express.static('../../client/build'));
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})