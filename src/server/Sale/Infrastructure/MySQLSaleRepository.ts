import { Sale } from "../Domain/Sale";
import { SaleRepository } from "../Domain/SaleRepository";
import { Connection } from "mysql";
import { SaleError } from "../Domain/SaleError";

export class MySQLSaleRepository implements SaleRepository {

    private connection: Connection;

    public constructor(connection: Connection) {
        this.connection = connection;
    }

    public save(sale: Sale): Promise<void> {
        
        return new Promise((resolve, reject) => {

            var query = "INSERT INTO sale (id, value, employee, date) VALUES ( ?, ?, ?, ? )";

            var data = [sale.getId(), sale.getValue(), sale.getEmployee(), sale.getDate()];

            this.connection.query(query, data, (err, result) => {

                if(err) {
                    reject(new SaleError(`ERROR_TO_INSERT_THE_SALE => ${err.code}`));
                }
                
                resolve();

            });

        });


    }

}