import express, { Request, Response } from "express";
import * as DataService from '../../../services/data.services';

export const TestParisRouter = express.Router();

TestParisRouter.get("/", async (req: Request, res: Response) => {
  try {
    const data = await DataService.getTestParis();
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default TestParisRouter