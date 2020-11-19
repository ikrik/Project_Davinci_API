
import express, { Request, Response } from "express";
import TransactionsRouter from './transactions';
import PolygonsRouter from './polygons';

const V1Router = express.Router();

V1Router.get('/', (req: Request, res: Response) => {
  res.send('Hello v1 GET API');
});

V1Router.use('/transactions', TransactionsRouter);
V1Router.use('/polygons', PolygonsRouter);

export default V1Router;