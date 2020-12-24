import express, { Request, Response } from "express";
import * as DataService from '../../../../services/data.services';

export const CommuneFromPointRouter = express.Router();

CommuneFromPointRouter.get("/", async (req: Request, res: Response) => {
  try {
    const data = await DataService.getDepIdCommIdByCoordinates();

    res.status(200).send(data);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default CommuneFromPointRouter;