import { DeleteClient } from "../../../../src/server/Client/Application/DeleteClient";
import { ClientError } from "../../../../src/server/Client/Domain/ClientError";
import { ClientRepositoryMock } from "../__mocks__/ClientRepositoryMock";

describe("Delete new client class", () => {

    var repository: ClientRepositoryMock;
    var controller: DeleteClient;

    beforeEach(() => {
        repository = new ClientRepositoryMock();
        controller = new DeleteClient(repository);
    });

    it("eliminar client existente", async () => {
        await controller.deleteClient("2");
        var res = repository.search("2");
        expect(res).toBeNull();
    });

    it("fallo al eliminar cliente", async () => {
        expect(() => controller.deleteClient("false")).rejects.toThrow("CLIENT_ERROR");
    });

});