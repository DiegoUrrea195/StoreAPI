import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { IncreaseDebt } from "../../../../src/server/Client/Application/IncreaseDebt";
import { Client } from "../../../../src/server/Client/Domain/Client";


export async function increaseDebt(req: Request, res: Response) {
    
    var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
    var controller = new IncreaseDebt(repository);

    var client: Client = await repository.search(req.body.id);
    
    var value: number = new Number(req.body.value).valueOf();

    if(controller.increaseDebt(client, value)) {
        res.status(200).send();
    }else {
        res.status(500).send();
    }


}