import { Sale } from "../../../../src/server/Sale/Domain/Sale";
import { MySQLSaleRepository } from "../../../../src/server/Sale/Infrastructure/MySQLSaleRepository";
import { MySqlConnection } from "../../../../src/server/Shared/MySQL/MySqlConnection";
import { createUuid } from "../../../../src/server/Shared/util/uuid";
import { createDate } from "../../../../src/server/Shared/util/date";

describe("Conexion de base de datos Sale", () => {

    var connection: MySqlConnection;
    var repository: MySQLSaleRepository;

    beforeEach(async () => {
        connection = new MySqlConnection();
        connection.connect();
        repository = new MySQLSaleRepository(await connection.getConnection());
    });

    afterEach(() => {
        connection.close();
    });

    it("guardar una nueva venta", async () => {
        var id = createUuid();
        var date = createDate();
        var sale = new Sale(id, 2000, "12345", date);

        expect(await repository.save(sale));
    });

    it("guardar una nueva venta, con un empleado no existente",() => {
        var id = createDate();
        var date = createDate();
        var sale = new Sale(id, 4500, "0000",date);

        expect(()=> repository.save(sale)).rejects.toThrow("ERROR_TO_INSERT_THE_SALE");
    });


    it("obtener varias ventas", async () => {
        var sales = await repository.all(0,5);
        expect(sales).toBeInstanceOf(Array);
    })

});