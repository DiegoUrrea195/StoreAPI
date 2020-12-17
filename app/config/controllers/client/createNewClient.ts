import { Request, Response } from "express";
import { CreateNewClient } from "../../../../src/server/Client/Application/CreateNewClient";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { createUuid } from "../../../../src/server/Shared/util/uuid";
import { connection } from "../../globals";

export async function createNewClient(req: Request, res: Response) {

    try {
        
        var repository = new MySQLClientRepository(await connection.getConnection());
        var controller = new CreateNewClient(repository);

        controller.createClient(createUuid(), req.body.name);
        
        res.status(201).send();

    } catch (error) {

        console.log(error);
        res.status(500).send();
        
    }

}