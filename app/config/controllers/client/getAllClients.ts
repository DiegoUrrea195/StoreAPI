import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { GetAllClients } from "../../../../src/server/Client/Application/GetAllClients";
import httpStatus from "http-status";

export async function getAllClients(req: Request, res: Response) {
    
    // Type url http://localhost:port/client/all?init=0&limit=5
    var init =  Number(req.query.init).valueOf();
    var limit = Number(req.query.limit).valueOf();
    
    console.log("init =>", init, "limit =>", limit);

    try {

        var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
        var controller = new GetAllClients(repository);

        var clients = controller.getAllClients(init, limit);
        
        res.status(httpStatus.OK).send(clients);

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ "error" : error.code})
    }





}