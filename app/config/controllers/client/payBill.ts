import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { PayBillClient } from "../../../../src/server/Client/Application/PayBillClient";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { Client } from "../../../../src/server/Client/Domain/Client";

export async function payBill(req: Request, res: Response) {

    var repository = new MySQLClientRepository( await MySQLconnection.getConnection() );
    var controller = new PayBillClient(repository);

    var client: Client = await repository.search(req.body.id);

    var value = new Number(req.body.value).valueOf()

    if( await controller.payBillClient(client, value)) {
        res.status(200).send(); 
    }else{
        res.status(500).send();
    }

}