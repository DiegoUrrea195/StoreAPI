import { MySqlConnection } from "../../../../src/server/Shared/MySQL/MySqlConnection";
import { MySQLClientRepository } from "../../../../src/server/Client/Infrastructure/MySQLClientRepository";
import { Client } from "../../../../src/server/Client/Domain/Client";
import { createUuid } from "../../../../src/server/Shared/util/uuid";

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
        var client = new Client(id, "test", 0);
        expect(await repository.save(client));
    });

    it("buscar un client con su id", async () => {
        expect(await repository.search("test")).toBeInstanceOf(Client);
    });


    it("buscar un cliente que no existe", async () => {
        expect(() => repository.search("hola")).rejects.toThrow("CLIENT_NOT_EXIST")
    });

    it("actualizar usuario existente", async() => {
        var name = Math.floor((Math.random() * 10) + 1).toString();
        var client = new Client("test", name, 2800);
        await repository.update(client)
        expect(await repository.search("test")).toEqual(client);
    });

    it("obtener varios usuarios", async () => {
        var clients = await repository.all(0, 5);
        expect(clients).toBeInstanceOf(Array)
    })

});