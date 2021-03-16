import { Pool } from "mysql";
import { Acount } from "../Domain/Acount";
import { AcountError } from "../Domain/AcountError";
import { AcountRepository } from "../Domain/AcountRepository";

export class MySQLAcountRepository implements AcountRepository {

    private connection: Pool;

    public constructor(connection: Pool) {
        this.connection = connection;
    }

    public async save(acount: Acount): Promise<void> {
        
        return new Promise((resolve, reject) => {

            var query = "INSERT INTO counts (id, value, description, client, employee, date) VALUES (?, ?, ?, ?, ?, ?)";

            var data = [acount.id, acount.value, acount.description, acount.client, acount.employee, acount.date];

            this.connection.query(query, data, (err, result) => {

                if(err) {
                    reject(new AcountError("ERROR_TO_INSERT_ACOUNT"));
                }

                resolve();

            });

        });


    }


    public async getCountsOfClient(id: string): Promise<Acount[]> {
        
        return new Promise((resolve, reject) => {

            var query = "SELECT * FROM counts WHERE id = ?";
            
            var data: Acount[] = [];

            this.connection.query(query, id, (err, result) => {

                if(err) {
                    reject(new AcountError("ERROR_TO_GET_ALL_ACOUNTS"));
                }

                result.forEach(function (acount: any) {
                    data.push(new Acount(acount["id"], acount["value"], acount["description"], acount["client"], acount["employee"], acount["date"])); 
                });

                resolve(data);

            });


        });

    }

}