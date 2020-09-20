import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

const ErrorHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500;
  const message =
    error.message || "It's not you. It's us. We are having some problems.";

  res.status(status).send(message);
};

export default ErrorHandler