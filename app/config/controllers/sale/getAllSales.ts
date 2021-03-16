import { Request,  Response } from "express";
import httpStatus from "http-status";
import { GetAllSales } from "../../../../src/server/Sale/Application/GetAllSales";
import { MySQLSaleRepository } from "../../../../src/server/Sale/Infrastructure/MySQLSaleRepository";
import { MySQLconnection } from "../../globals";

export async function getAllSales(req: Request, res: Response) {

    //http://host:port/sale?init=number&limit=number
    var init = new Number(req.query["init"]).valueOf();
    var limit = new Number(req.query["limit"]).valueOf();

    try {

        var repository = new MySQLSaleRepository(await MySQLconnection.getConnection());
        var controller = new GetAllSales(repository);

        var data = await controller.getAllSales(init, limit);

        res.status(httpStatus.OK).send(data);

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
    }


}