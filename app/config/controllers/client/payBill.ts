import { Request, Response } from "express";
import { MySQLconnection } from "../../globals";
import { PayBillClient } from "../../../../src/server/Client/Application/PayBillClient";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
<<<<<<< HEAD
import { Client } from "../../../../src/server/Client/Domain/Client";
=======
>>>>>>> bc52d51
import httpStatus from "http-status";

export async function payBill(req: Request, res: Response) {

<<<<<<< HEAD
    // Type url http://host:port/client/paybill/:id
    // Data in the body = value
    var id = req.params.id;
    var value = new Number(req.body.value).valueOf()

    try {

        var repository = new MySQLClientRepository( await MySQLconnection.getConnection() );
        var controller = new PayBillClient(repository);
        
        await controller.payBillClient(id, value)

        res.status(httpStatus.OK).send();

    } catch (error) {
        if(error.code == "CLIENT_NOT_EXIST") {
            res.status(httpStatus.NOT_FOUND).json({"error": error.code});
        }else {            
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({"error": error.code});
=======
    //http://host:port/paybill/:id
    //Body => value
    var id = req.params.id;
    var value = new Number(req.body.value).valueOf();

    try {
        
        var repository = new MySQLClientRepository(await MySQLconnection.getConnection());
        var controller = new PayBillClient(repository);

        await controller.payBillClient(id, value);

        res.status(httpStatus.OK).send();
        
    } catch (error) {
        if(error.code == "Payment exceeds current debt") {
            res.status(httpStatus.BAD_REQUEST).send(error.code);
        }
        if (error.code == "CLIENT_NOT_EXIST") {
            res.status(httpStatus.NOT_FOUND).send(error.code);
        }else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.code);
>>>>>>> bc52d51
        }
    }

}