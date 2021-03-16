import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
<<<<<<< HEAD
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





=======
import { GetAllClients } from "../../../../src/server/Client/Application/GetAllClients";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import httpStatus from "http-status";

export async function getAllClients(req: Request, res: Response) {

    //http://host:port/all?init=number&limit=number
    var init = new Number(req.query["init"]).valueOf();
    var limit = new Number(req.query["limit"]).valueOf();

    try {
        
        var reposiory = new MySQLClientRepository(await MySQLconnection.getConnection());
        var contoller = new GetAllClients(reposiory);
        
        var data = contoller.getAllClients(init, limit);

        res.status(httpStatus.OK).send(data);

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
    }


>>>>>>> bc52d51
}