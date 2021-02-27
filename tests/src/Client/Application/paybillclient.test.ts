import { PayBillClient } from "../../../../src/server/Client/Application/PayBillClient";
import { Client } from "../../../../src/server/Client/Domain/Client";
import { ClientError } from "../../../../src/server/Client/Domain/ClientError";
import { ClientRepositoryMock } from "../__mocks__/ClientRepositoryMock";


describe("Pay Bill Client class", () => {

    var repository: ClientRepositoryMock;
    var controller: PayBillClient;

    beforeEach(() => {
        repository = new ClientRepositoryMock();
        controller = new PayBillClient(repository);
    });

    it("pago de deuda de un cliente", async () => {

        var client = await repository.search("2");
        var debt = client.getDebt();
        var pay = 4500;

        await controller.payBillClient(client, pay);
        var res = await repository.search("2");
        expect(res.getDebt()).toBe(debt - pay);
    });


    it("fallo, al pagar la duda", () => {
        var client = new Client("false", "diego", 20);
        expect(() => controller.payBillClient(client, 5)).rejects.toThrow("CLIENT_ERROR");
    });

    it("el pago es mayor que la deuda", async() => {
        var client = await repository.search("1");
        expect(() => controller.payBillClient(client, 3000)).rejects.toThrow("Payment exceeds current debt");
    })

 

});