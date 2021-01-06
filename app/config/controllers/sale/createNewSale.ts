import { Request, Response } from "express";
import { Employee } from "../../../../src/server/Employee/Domain/Employee";
import { CreateNewSale } from "../../../../src/server/Sale/Application/CreateNewSale";
import { MySQLSaleRepository } from "../../../../src/server/Sale/Infrastructure/MySQLSaleRepository";
import { connection } from "../../globals";


export async function createNewSale(req: Request, res: Response) {

    var repository = new MySQLSaleRepository(await connection.getConnection());
    var controller = new CreateNewSale(repository);

    var employee = new Employee();

    controller.createNewSale()



}