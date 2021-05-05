import { Sale } from "../Domain/Sale";
import { SaleRepository } from "../Domain/SaleRepository";
import { Pool } from "mysql";
import { SaleError } from "../Domain/SaleError";

export class MySQLSaleRepository implements SaleRepository {

    private connection: Pool;

    public constructor(connection: Pool) {
        this.connection = connection;
    }

    public async save(sale: Sale): Promise<void> {
        
        return new Promise((resolve, reject) => {

            var query = "INSERT INTO sale (id, value, employee, date) VALUES ( ?, ?, ?, ? )";

            var data = [sale.getId(), sale.getValue(), sale.getEmployee(), sale.getDate()];

            this.connection.query(query, data, (err, result) => {

                if(err) {
                    
                    if(err.code == "ER_NO_REFERENCED_ROW_2") {
                        reject(new SaleError("EMPLOYEE_NO_REGISTER"));
                    }else {
                        reject(new SaleError(`ERROR_TO_INSERT_THE_SALE`));
                    }
                }
                
                resolve();

            });

        });

    }

    public async all(init:number, limit: number): Promise<Sale[]> {

        return new Promise((resolve, reject) => {

            var query = `SELECT * FROM sale limit ${init},${limit} `;

            var data: Sale[] = [];

            this.connection.query(query, (err, result) => {

                if(err) {
                    reject(new SaleError("ERROR_TO_GET_ALL_SALES"));
                }

                result.forEach(function (sale: any) {
                    
                    data.push(new Sale(sale["id"], sale["value"], sale["employee"], sale["date"]));

                });

                resolve(data);

            });

        });

    }

}