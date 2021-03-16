import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { DeleteClient } from "../../../../src/server/Client/Application/DeleteClient";
import httpStatus from "http-status";

export async function deleteClient(req: Request, res: Response) {
    
    //http://host:port/client/delete/:id
    var id = req.params.id;

    try {
        var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
        var controller = new DeleteClient(repository);

        await controller.deleteClient(id);

        res.status(httpStatus.OK).send();

    } catch (error) {
        if(error.code == "CLIENT_NOT_EXIST") {
            res.status(httpStatus.NOT_FOUND).send(error.code);
        }else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
        }
    }


}   