import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { GetAllClients } from "../../../../src/server/Client/Application/GetAllClients";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import httpStatus from "http-status";

export async function getAllClients(req: Request, res: Response) {

    //http://host:port/all/for?init=number&limit=number
    var init = new Number(req.query["init"]).valueOf();
    var limit = new Number(req.query["limit"]).valueOf();

    try {
        
        var reposiory = new MySQLClientRepository(await MySQLconnection.getConnection());
        var contoller = new GetAllClients(reposiory);

        var data = await contoller.getAllClients(init, limit);

        res.status(httpStatus.OK).send(data);

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
    }


}