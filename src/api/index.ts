import express, { Request, Response } from "express";
import V1Router from './v1'

const ApiRouter = express.Router();

ApiRouter.use('/v1', V1Router);

ApiRouter.use('/', (req: Request, res: Response) => {
  res.redirect('/api/v1');
});


export default ApiRouter;