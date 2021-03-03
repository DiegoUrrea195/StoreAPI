import { MySqlConnection } from "../../../../src/server/Shared/MySQL/MySqlConnection";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { Client } from "../../../../src/server/Client/Domain/Client";
import { createUuid } from "../../../../src/server/Shared/util/uuid";
import { ClientError } from "../../../../src/server/Client/Domain/ClientError";

describe("Conexion de base de datos y metodos crud implementados", () => {

    var connection: MySqlConnection;
    var repository: MySQLClientRepository

    beforeEach(async () => {
        connection = new MySqlConnection();
        connection.connect();
        repository = new MySQLClientRepository(await connection.getConnection())
    });

    afterEach(() => {
        connection.close();
    })

  
    it("crear un nuevo client", async() => {
        var id = createUuid();
        console.log(id);
        var client = new Client(id, "test", 0);
        expect(await repository.save(client));
    });

    it("buscar un client con su id", async () => {
        expect(await repository.search("f7cc08f8-fd4d-47b8-af43-685d01a89da5")).toBeInstanceOf(Client);
    });


    it("buscar un cliente que no existe", async () => {
        expect(() => repository.search("hola")).rejects.toThrow("CLIENT_NOT_EXIST")
    });

    


});