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
        controller.createClient("holasoyunid", "diego");
    });
    
});