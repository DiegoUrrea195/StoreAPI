import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateNewSale } from "../../../../src/server/Sale/Application/CreateNewSale";
import { MySQLSaleRepository } from "../../../../src/server/Sale/Infrastructure/MySQLSaleRepository";
import { MySQLconnection } from "../../globals";


export async function createNewSale(req: Request, res: Response) {

    //http://host:port/sale/new
    //Body => value, employee
    var value = new Number(req.body.value).valueOf();

    try {

        var repository = new MySQLSaleRepository(await MySQLconnection.getConnection());
        var controller = new CreateNewSale(repository);

        await controller.createNewSale(value, "12345");
        
        res.status(httpStatus.CREATED).send();

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
    }




}