import { GetClient } from "../../../../src/server/Client/Application/GetClient";
import { ClientJson } from "../../../../src/server/Client/Domain/ClientJson";
import { ClientRepositoryMock } from "../__mocks__/ClientRepositoryMock";


describe("Get Client class", () => {

    var repository: ClientRepositoryMock;
    var controller: GetClient;

    beforeEach(() => {
        repository = new ClientRepositoryMock();
        controller = new GetClient(repository);
    });

    it("obtener un cliente con un id retornando un json", async () => {
        var client = await controller.getClient("1");
        var res: ClientJson = {id: "1", name: "diego", debt: 2500}
        expect(client).toEqual(res);
    });

    it("fallo, obtener client", () => {
        expect(() => controller.getClient("false")).rejects.toThrow("CLIENT_ERROR");
    })

});