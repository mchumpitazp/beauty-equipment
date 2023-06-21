// modules
require('dotenv').config();
const express = require('express');
const path = require('path');
// const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./db');

// routers
const productsRouter = require('./routes/productsRouter');
const ordersRouter = require('./routes/ordersRouter');

// set up server
const port = '3002';
const app = express();
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    console.log(`Happy ${app.get('env')}`);
    connectDB();
});

// tools
app.use(helmet());
//app.use(cors());

// routers
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
