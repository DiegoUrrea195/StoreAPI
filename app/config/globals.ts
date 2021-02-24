import { MySqlConnection } from "../../src/server/Shared/MySQL/MySqlConnection";
//import { RedisConnection } from "../../src/server/Shared/Redis/RedisConnection";

export const MySQLconnection = new MySqlConnection();
//export const REDISconnection = new RedisConnection(); 

MySQLconnection.connect();
//REDISconnection.connect();