import { IncreaseDebt } from "../../../../src/server/Client/Application/IncreaseDebt";
import { Client } from "../../../../src/server/Client/Domain/Client";
import { ClientError } from "../../../../src/server/Client/Domain/ClientError";
import { ClientRepositoryMock } from "../__mocks__/ClientRepositoryMock";

describe("Increase debt class", () => {

    var repository: ClientRepositoryMock;
    var controller: IncreaseDebt;

    beforeEach(() => {
        repository = new ClientRepositoryMock();
        controller = new IncreaseDebt(repository);
    });

    it("incrementar deuda de un client", async () => {
        var client = await repository.search("1");
        var debt = client.getDebt()
        await controller.increaseDebt(client, 2500);
        var res = await repository.search("1");
        expect(res.getDebt()).toBe(debt + 2500);
    });

    it("error al incrementar deuda de un client", () => {
        var client = new Client("false", "jose", 20000);
        expect( () => controller.increaseDebt(client, 2500)).rejects.toThrow("CLIENT_ERROR");
    });
    
}); 