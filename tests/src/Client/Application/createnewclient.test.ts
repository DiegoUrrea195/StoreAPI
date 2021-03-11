import { CreateNewClient } from "../../../../src/server/Client/Application/CreateNewClient";
import { Client } from "../../../../src/server/Client/Domain/Client";
import { ClientRepositoryMock } from "../__mocks__/ClientRepositoryMock";

describe("CreateNewClient class",() => {

    var repository: ClientRepositoryMock;
    var controller: CreateNewClient;

    beforeEach(() => {
        repository = new ClientRepositoryMock();
        controller = new CreateNewClient(repository);
    });

    it("crear nuevo cliente en el sistema", async () => {
        await controller.createClient("hola", "eljefe");
        var res = await repository.search("hola"); 
        var exp: Client = new Client("hola", "eljefe", 0);
        expect(res).toEqual(exp);
    });

    it("fallo, al crear un nuevo client", async () => {
        expect( () => controller.createClient("false", "hola")).rejects.toThrow("CLIENT_ERROR");
    });
    
});