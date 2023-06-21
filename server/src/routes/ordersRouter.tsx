import { Request, Response, NextFunction } from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const Orders = require('../models/orders');

const ordersRouter = express.Router();
ordersRouter.use(bodyParser.json());

ordersRouter.route('/')
.post((req: Request, res: Response, next: NextFunction) => {
    Orders.create(req.body)
    .then((order: any) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(order);
    }, (err: any) => next(err))
    .catch((err: any) => next(err));
})

module.exports = ordersRouter;
export{}