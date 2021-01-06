import { use } from "passport";
import { Strategy } from "passport-local";
import { MySQLEmployeeRepository } from "../../../../src/server/Employee/Infrastructure/MySQLEmployeeRepository";
import { connection } from "../../globals";
import { EmployeeModel } from "./EmployeeModel";


var strategy = new Strategy(async function(email, password, done) {

    var repository = new MySQLEmployeeRepository(await connection.getConnection());
    
    try {
        
        var employee = await repository.searchByEmail(email);

        var employee_model: EmployeeModel =  {
            id : employee.getId(),
            email : employee.getEmail(),
            password : employee.getPassword()
        }

        if(employee_model.password == password) {
            return done(null, employee_model);
        }else {
            return done(null, "Error to sign in ");
        }

    } catch (error) {
        
    }


});