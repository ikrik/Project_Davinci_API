
import express, { Request, Response } from "express";
import ParisPointsRouter from './paris-points';
import CommunesParisRouter from './communes-paris';
import DepartmentsRouter from './departments';
import CountryRouter from './france';

const V1Router = express.Router();

V1Router.get('/', (req: Request, res: Response) => {
  res.send('Hello v1 GET API');
});

V1Router.use('/paris-points', ParisPointsRouter);
V1Router.use('/communes-paris', CommunesParisRouter);
V1Router.use('/departments', DepartmentsRouter);
V1Router.use('/france', CountryRouter);



export default V1Router;