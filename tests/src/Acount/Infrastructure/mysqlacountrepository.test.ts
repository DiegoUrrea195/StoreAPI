import { Acount } from "../../../../src/server/Acount/Domain/Acount";
import { MySQLAcountRepository } from "../../../../src/server/Acount/Infrastructure/MySQLAcountRepository";
import { MySqlConnection } from "../../../../src/server/Shared/MySQL/MySqlConnection";
import { createUuid } from "../../../../src/server/Shared/util/uuid";
import { createDate } from "../../../../src/server/Shared/util/date";

describe("Conexion de base de datos Acount", () => {

    var connection: MySqlConnection;
    var repository: MySQLAcountRepository;

    beforeEach(async () => {
        connection = new MySqlConnection();
        connection.connect();
        repository = new MySQLAcountRepository(await connection.getConnection());
    });

    afterEach(() => {
        connection.close();
    });

    it("guardar una nueva cuneta", async () => {
        var id = createUuid();
        var date = createDate();
        var acount = new Acount(id, 2000, "", "test", "12345", date);

        expect(await repository.save(acount));
    });

    it("guardar una nueva venta, con un empleado no existente",() => {
        var id = createDate();
        var date = createDate();
        var acount = new Acount(id, 2000, "", "0000", "12345", date);

        expect(()=> repository.save(acount)).rejects.toThrow("ERROR_TO_INSERT_ACOUNT");
    });


    it("obtener varia cuentas de un cliente", async () => {
        var acounts = await repository.getCountsOfClient("test");
        console.log(acounts);
        expect(acounts).toBeInstanceOf(Array);
    })

});