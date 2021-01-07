import { use } from "passport";
import { Strategy } from "passport-local";
import { MySQLEmployeeRepository } from "../../../../src/server/Employee/Infrastructure/MySQLEmployeeRepository";
import { MySQLconnection } from "../../globals";
import { EmployeeModel } from "./EmployeeModel";
import { compare } from "bcrypt";


var strategy = new Strategy(async function(email, password, done) {

    var repository = new MySQLEmployeeRepository(await MySQLconnection.getConnection());
    
    try {
        
        var employee = await repository.searchByEmail(email);

        var employee_model: EmployeeModel =  {
            id : employee.getId(),
            email : employee.getEmail()
        }

        if(await compare(password, employee.getPassword())) {
            return done(null, employee_model);
        }else {
            return done(null, "Error to sign in ");
        }

    } catch (error) {
        return done(error);
    }


});


use(strategy);