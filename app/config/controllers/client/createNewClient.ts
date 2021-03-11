import { Request, Response } from "express";
import { CreateNewClient } from "../../../../src/server/Client/Application/CreateNewClient";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { createUuid } from "../../../../src/server/Shared/util/uuid";
import { MySQLconnection } from "../../globals";
import httpStatus from "http-status";

export async function createNewClient(req: Request, res: Response) {

    // Type url http://host:port/client/new 
    // Data in the body = name 
    var name = req.body.name; 

    try {

        var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
        var controller = new CreateNewClient(repository);
        
        await controller.createClient(createUuid(), name)

        res.status(httpStatus.CREATED).send();
    
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ "error" : error.code});
    }

}