import { Request, Response } from "express";
import { connection } from "../../globals";
import { PayBillClient } from "../../../../src/server/Client/Application/PayBillClient";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { Client } from "../../../../src/server/Client/Domain/Client";

export async function payBill(req: Request, res: Response) {

    try {

        var repository = new MySQLClientRepository( await connection.getConnection() );
        var controller = new PayBillClient(repository);

        var client: Client = await repository.search(req.body.id);

        controller.payBillClient(client, req.body.value);

        res.status(201).send(); 
        

    } catch (error) {
        
        res.status(500);

    }


}