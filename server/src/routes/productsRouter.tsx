import { Request, Response, NextFunction } from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const Products = require('../models/products');

const productsRouter = express.Router();
productsRouter.use(bodyParser.json());

productsRouter.route('/')
.get((req: Request, res: Response, next: NextFunction) => {
    Products.find(req.query)
    .then((products: any) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
    }, (err: any) => next(err))
    .catch((err: any) => next(err));
})

module.exports = productsRouter;
export{}