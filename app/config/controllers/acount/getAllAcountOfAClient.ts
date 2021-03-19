import { Request, Response } from "express";
import { GetAllAcountOfAClient } from "../../../../src/server/Acount/Application/GetAllAcountsOfAClient";
import { MySQLAcountRepository } from "../../../../src/server/Acount/Infrastructure/MySQLAcountRepository";
import { MySQLconnection } from "../../globals";
import httpStatus from "http-status";

export async function getAllAcountOfAClient(req: Request, res: Response) {
    
    //http:host:port/acount/id

    var id = req.params.id;
    try {
        
        var repository = new MySQLAcountRepository(await MySQLconnection.getConnection());
        var controller = new GetAllAcountOfAClient(repository);

        var data = await controller.getAllAcountOfAClient(id);

        res.status(httpStatus.OK).send(data);

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
    }

}