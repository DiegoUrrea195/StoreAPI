import {  Pool, createPool, PoolConnection } from "mysql";

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
            connectionLimit: 2,
            debug: false
        });
        
    }

    public async getConnection(): Promise<Pool>{
        return this.connection
    }

    public  close(): void {
        this.connection.end();
    }


}