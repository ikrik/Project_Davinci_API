import express, { Request, Response } from "express";
import * as DataService from '../../../services/data.services';

export const DepartmentsRouter = express.Router();

DepartmentsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const data = await DataService.getDepartments();
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default DepartmentsRouter