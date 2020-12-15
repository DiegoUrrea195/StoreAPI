import { Request, Response } from "express";

export function createNewClient(req: Request, res: Response) {

    console.log(req.body.id);
    
    res.send(201);

}