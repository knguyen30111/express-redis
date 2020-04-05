import { RequestHandler, Request, Response, NextFunction } from "express";
import { BadRequest } from "../errors";

export const catchAsync = (handler: RequestHandler) => 
(...args: [Request, Response, NextFunction]) => handler(...args).catch(args[2])

export const serverError =  (err: BadRequest, req: Request, res: Response, next: NextFunction) => {
  if(!err.status) {
    console.error(err.stack)
  }
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error'})
}

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Not found'})
}