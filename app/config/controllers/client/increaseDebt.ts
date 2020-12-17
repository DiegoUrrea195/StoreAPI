import { Request, Response } from "express";
import { connection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { IncreaseDebt } from "../../../../src/server/Client/Application/IncreaseDebt";
import { Client } from "../../../../src/server/Client/Domain/Client";


export async function increaseDebt(req: Request, res: Response) {
    
    try {

        var repository = new MySQLClientRepository(await connection.getConnection());
        var controller = new IncreaseDebt(repository);

        var client: Client = await repository.search(req.body.id);

        controller.increaseDebt(client, req.body.value);

        res.status(200).send();

    }catch(error) {

        console.log(error);
        res.status(500).send();

    }

}