import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { GetClient } from "../../../../src/server/Client/Application/GetClient";
import httpStatus from "http-status"

export async function getClient(req: Request, res: Response) {
    
    //http://host:port/client/:id
    var id = req.params.id;

    try {
        var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
        var controller = new GetClient(repository);
        var client = await controller.getClient(id);

        res.status(httpStatus.OK).json(client);
        
    } catch (error) {
        if(error.code == "CLIENT_NOT_EXIST") {
            res.status(httpStatus.NOT_FOUND).send(error.code);
        }else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
        }
    }

}