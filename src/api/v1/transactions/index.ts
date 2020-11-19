import express, { Request, Response } from "express";
import PointsRouter from './rectangle'

const TransactionsRouter = express.Router();

TransactionsRouter.use('/rectange', PointsRouter);

TransactionsRouter.use('/', (req: Request, res: Response) => {
  res.redirect('/api/v1/transactions/rectangle');
});


export default TransactionsRouter;