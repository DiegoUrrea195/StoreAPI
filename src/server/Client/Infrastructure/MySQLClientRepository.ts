import { Client } from "../Domain/Client";
import { ClientRepository } from "../Domain/ClientRepository";
import { Connection, queryCallback } from "mysql";

export class MySQLClientRepository implements ClientRepository{

    private connection: Connection;

    public  constructor(connection: Connection) {
         this.connection = connection;
    }


    public async save(client: Client): Promise<void> 
    {

        return new Promise((resolve, reject) => {

            var query = "INSERT INTO client (id, name, debt) VALUES ( ?, ?, ?)";

            var data = [client.getId(), client.getName(), client.getDebt()]
            
            this.connection.query(query, data, (err, result) => {
                
                if(err) {
                    reject(new Error(err.code));
                }

                resolve();

            });

        });

    }

    
    public async search(id: number): Promise<Client> {
        
        return new Promise((resolve, reject) => {

            var query = "SELECT * FROM client WHERE id = ?";

            this.connection.query(query, [id], (err, result) => {
                
                if(err) {
                    reject(new Error(err.code));
                }

                var data = result[0]
            
                resolve( new Client(data["id"], data["name"], data["debt"]) );

            });

        });

    }

    public async update(client: Client) : Promise<void> {

        return new Promise((resolve, reject) => {

            var query = "UPDATE client SET name = ?, debt = ?  WHERE id = ?";

            var data = [client.getName(), client.getDebt(), client.getId()];

            this.connection.query(query, data, (err, result) => {
                
                if(err) {
                    reject(new Error(err.code));
                }

                resolve();

            });


        });
    }

    public async all(): Promise<Client[]> {

        return new Promise((resolve, reject) => {

            var query = "SELECT * FROM client";

            var data: Client[] = [];

            this.connection.query(query, (err, result) => {

                if(err) {
                    reject( new Error(err.code) );
                }

                result.forEach(function (client: any) {
                    
                    data.push(new Client(client["id"], client["name"], client["debt"]));

                });

                resolve(data);
                

            });

        });

    }

}