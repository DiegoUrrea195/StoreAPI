import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { IncreaseDebt } from "../../../../src/server/Client/Application/IncreaseDebt";
import { Client } from "../../../../src/server/Client/Domain/Client";
import httpStatus from "http-status";


export async function increaseDebt(req: Request, res: Response) {

    // Type url http://host:port/increasedebt/:id
    // Data in the body = value
    var id = req.params.id;
    var value = req.body.value;

    try {
        
        var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
        var controller = new IncreaseDebt(repository);
        
        await controller.increaseDebt(id, value)
        
        res.status(httpStatus.OK).send();
    
    } catch (error) {
        if(error.code = "CLIENT_NOT_EXIST") {
            res.status(httpStatus.NOT_FOUND).json({"error": error.code});
        }else{
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json( { "error" : error.code});
        }
    }

}