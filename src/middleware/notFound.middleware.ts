import { Request, Response, NextFunction } from "express";

const NotFoundHandler = (req: Request, res: Response, next: NextFunction) => {

  const message = "Resource not found";

  res.status(404).send(message);
};

export default NotFoundHandler