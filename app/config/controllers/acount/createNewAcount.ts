import { Request, Response } from "express";
import { CreateNewAcunt } from "../../../../src/server/Acount/Application/CreateNewAcount";
import { CreateNewSale } from "../../../../src/server/Sale/Application/CreateNewSale";
import { MySQLAcountRepository } from "../../../../src/server/Acount/Infrastructure/MySQLAcountRepository";
import { MySQLSaleRepository } from "../../../../src/server/Sale/Infrastructure/MySQLSaleRepository";
import { MySQLconnection } from "../../globals";
import httpStatus from "http-status";

export async function createNewAcount(req: Request, res: Response) {
    
    //http://host:port/acount/new
    // cookie => employee_id
    // Body => value, client_id, description 
    var value = new Number(req.body.value).valueOf();
    var client = req.body.client;
    var description = req.body.description;

    try {
        
        var reposiory = new MySQLAcountRepository(await MySQLconnection.getConnection());
        var saleRepository = new MySQLSaleRepository(await MySQLconnection.getConnection());
        var contoller = new CreateNewAcunt(reposiory);
        var saleController = new CreateNewSale(saleRepository);

        await saleController.createNewSale(value, "12345");
        await contoller.createNewAcount(value, client, "12345", description);
        
        res.status(httpStatus.CREATED).send();

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
    }

}