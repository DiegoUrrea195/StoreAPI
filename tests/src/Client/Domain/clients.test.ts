import { Client } from "../../../../src/server/Client/Domain/Client";

describe("Tests de funciones de la clase cliente", () => {

    it("incrementar la deuda de un cliete",() => {
        var client = new Client("holasoyunid", "pepe", 0);
        client.addDebt(5500);
        expect(client.getDebt()).toBe(client.getDebt());
    });

    it("pagar deuda de un client", () => {
        var client = new Client("holasoy un id", "pepe", 4600);
        client.payDebt(1500);
        expect(client.getDebt()).toBe(3100);
    });

    it("pago excede la deuda actual", () => {
        var client = new Client("holasoyunid", "pepe", 9800);
        expect( () => client.payDebt(10500) ).toThrow("Payment exceeds current debt");
    });

});