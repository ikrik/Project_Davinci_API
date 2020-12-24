import express, { Request, Response } from "express";
import RegionRouter from './regions';
import DepartmentsRouter from './departments';
import CommunesRouter from './communes';
import CommuneFromPointRouter from './commune_from_point';

const PolygonsRouter = express.Router();

PolygonsRouter.use('/regions', RegionRouter);
PolygonsRouter.use('/departments', DepartmentsRouter);
PolygonsRouter.use('/communes', CommunesRouter);
PolygonsRouter.use('/commune_from_point', CommuneFromPointRouter);

PolygonsRouter.use('/', (req: Request, res: Response) => {
  res.redirect('/api/v1/polygons/regions');
});


export default PolygonsRouter;