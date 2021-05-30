import { Request, Response } from 'express';

export default function sayHello(req: Request, res: Response) {
  res.statusCode = 200;
  res.send({data: 'Hello'});
}