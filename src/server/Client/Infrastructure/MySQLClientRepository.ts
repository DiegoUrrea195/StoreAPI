import { Client } from "../Domain/Client";
import { ClientError } from "../Domain/ClientError";
import { ClientRepository } from "../Domain/ClientRepository";
import { Pool, PoolConnection } from "mysql";

export class MySQLClientRepository implements ClientRepository{

    private connection: PoolConnection;

    public  constructor(connection: PoolConnection) {
         this.connection = connection;
    }


    public async save(client: Client): Promise<void> 
    {

        return new Promise((resolve, reject) => {

            var query = "INSERT INTO client (id, name, debt) VALUES ( ?, ?, ?)";

            var data = [client.getId(), client.getName(), client.getDebt()]
            
            this.connection.query(query, data, (err, result) => {
                
                if(err) {
                    reject(new ClientError(`ERROR_TO_INSERT_THE_CLIENT`));
                }

                resolve();

            });

        });

    }

    
    public async search(id: string): Promise<Client> {
        
        return new Promise((resolve, reject) => {

            var query = `SELECT * FROM client WHERE id = "${id}"`;
            
            this.connection.query(query, (err, result) => {
                
                if(err) {                    
                    reject(new ClientError(`ERROR_TO_SEARCH_THE_CLIENT => ${err}`));
                }

                if(result[0] === undefined) {
                    reject(new ClientError("CLIENT_NOT_EXIST"));
                }else {
                    var data = result[0]
                    resolve( new Client(data["id"], data["name"], data["debt"]) );
                }        
                

            });

        });

    }

    public async update(client: Client) : Promise<void> {

        return new Promise((resolve, reject) => {

            var query = `UPDATE client SET name = "${client.getName()}", debt = ${client.getDebt()}  WHERE id = "${client.getId()}"`;

            this.connection.query(query, (err) => {
                
                if(err) {
                    reject(new ClientError(`ERROR_TO_UPDATE_THE_CLIENT`));
                }
                
                resolve();

            });


        });
    }

    public async all(init: number, limit: number): Promise<Client[]> {

        return new Promise((resolve, reject) => {

            var query = `SELECT * FROM client limit ${init}, ${limit}`;

            var data: Client[] = [];

            this.connection.query(query, (err, result) => {

                if(err) {
                    reject(new ClientError(`ERROR_TO_GET_ALL_CLIENTS`));
                }

                result.forEach(function (client: any) {
                    
                    data.push(new Client(client["id"], client["name"], client["debt"]));

                });

                resolve(data);
                
            });

        });

    }


    public async delete(id: string): Promise<void> {

        return new Promise((resolve, reject) => {

            var query = `DELETE FROM client WHERE id = "${id}"`;

            this.connection.query(query, (err) =>{

                if(err) {
                    reject(new ClientError(`ERROR_TO_DELETE_CLIENT`));
                }

                resolve()

            });

        });

    }

}