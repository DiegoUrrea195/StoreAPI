import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { DeleteClient } from "../../../../src/server/Client/Application/DeleteClient";

export async function deleteClient(req: Request, res: Response) {
    
    var repository = new MySQLClientRepository( await MySQLconnection.getConnection() );
    var controller = new DeleteClient(repository);
    
    if(await controller.deleteClient(req.body.id)) {
        res.status(200).send();
    }else {
        res.status(500).send();
    }


}