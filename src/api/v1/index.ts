
import express, { Request, Response } from "express";
import TestParisRouter from './test-paris';
import CommunesParisRouter from './communes-paris';

const V1Router = express.Router();

V1Router.get('/', (req: Request, res: Response) => {
  res.send('Hello v1 GET API');
});

V1Router.use('/test-paris', TestParisRouter);
V1Router.use('/communes-paris', CommunesParisRouter);


export default V1Router;