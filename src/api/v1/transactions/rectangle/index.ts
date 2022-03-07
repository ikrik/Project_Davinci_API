import express, { Request, Response } from "express";
import * as DataService from '../../../../services/data.services';

export const PointsRouter = express.Router();

PointsRouter.get("/*", async (req: Request, res: Response) => {
  try {
    const data = await DataService.getPoints();
    res.status(200).send(data);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
});

export default PointsRouter