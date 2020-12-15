import { CreateNewClient } from "../src/server/Client/Application/CreateNewClient";
import { MySQLClientRepository } from "../src/server/Client/Infrastructure/MySQLClientRepository";
import { MySqlConnection } from "../src/server/Shared/MySQL/MySqlConnection";


const connection =  new MySqlConnection();

connection.connect();

async function all() {
    
    var repository = new MySQLClientRepository(await connection.getConnection());

    var data = await repository.all();

    console.log(data);
    

}

async function add(id: string, name: string) {
    
    var repository = new MySQLClientRepository(await connection.getConnection());

    var controller = new CreateNewClient(repository);

    controller.createClient(id, name);

}


all();