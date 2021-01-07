import { createClient, RedisClient } from "redis";

export class RedisConnection {

    private connection: RedisClient;

    public connect(): void {

        this.connection = createClient();
   
    }

    public getConnection(): RedisClient {
        return this.connection;
    }

}