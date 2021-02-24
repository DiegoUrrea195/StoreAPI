import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { Client } from "../../../../src/server/Client/Domain/Client";

export async function getClient(req: Request, res: Response) {
    
    var repository = new MySQLClientRepository( await MySQLconnection.getConnection() );

    var client: Client = await repository.search(req.body.id);

    res.json({
        "id": `${client.getId()}`,
        "name": `${client.getName()}`,
        "debt": client.getDebt()
    }).send();

}