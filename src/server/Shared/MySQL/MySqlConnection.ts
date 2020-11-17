import {  Pool, createPool, Connection } from "mysql";
import { MySQLError } from "./MySqlError";

export class MySqlConnection 
{
    
    private  connection: Pool;

    public connect(): void
    {

        this.connection = createPool({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "diego123",
            database: "store",
            connectionLimit: 2
        });
        
    }

    public async getConnection(): Promise<Connection>
    {
        return new Promise((resolve, reject) => {
            
            this.connection.getConnection((err, connection) => {
               
                if(err) {
                    reject(new MySQLError("Error de conexion"));
                }
                
                resolve(connection);

            });
        });
        
    }


}