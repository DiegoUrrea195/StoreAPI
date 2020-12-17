import { MySqlConnection } from "../../src/server/Shared/MySQL/MySqlConnection";

export const connection = new MySqlConnection();

connection.connect();