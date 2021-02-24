import { Request, Response } from "express";
import { CreateNewClient } from "../../../../src/server/Client/Application/CreateNewClient";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { createUuid } from "../../../../src/server/Shared/util/uuid";
import { MySQLconnection } from "../../globals";

export async function createNewClient(req: Request, res: Response) {

    var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
    var controller = new CreateNewClient(repository);

    if(controller.createClient(createUuid(), req.body.name)) {
        res.status(201).send();
    }else {
        res.status(500).send();
    }
        

}