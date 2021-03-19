import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { IncreaseDebt } from "../../../../src/server/Client/Application/IncreaseDebt";
import httpStatus from "http-status";

export async function increaseDebt(req: Request, res: Response) {
    
    //http:host:port/client/increasedebt/:id
    // Body => value
    var id = req.params.id;
    var value = new Number(req.body.value).valueOf();
    try {

        var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
        var controller = new IncreaseDebt(repository);
        
        await controller.increaseDebt(id, value);        
        
        res.status(httpStatus.OK).send();

    } catch (error) {
        if(error.code = "CLIENT_NOT_EXIST"){
            res.status(httpStatus.NOT_FOUND).send(error.code);
        }else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
        }
    }

}