import { Connection } from "mysql";
import { Employee } from "../Domain/Employee";
import { EmployeeRepository } from "../Domain/EmployeeRepository";
import { EmployeeError } from "../Domain/EmployeeError";

export class MySQLEmployeeRepository implements EmployeeRepository {

    private connection: Connection;

    public constructor(connection: Connection) {
        this.connection = connection;
    }
    

    public save(employee: Employee): Promise<void> {
        
        return new Promise((resolve, reject) => {
            
            var query = "INSERT INTO employee ( id, name ) VALUES ( ?, ? )"
            var data = [employee.getId(), employee.getName()];

            this.connection.query(query, data, (err, result) => {

            if(err) {
                reject(new EmployeeError(`ERROR_TO_INSERT_EMPLOYEE => ${err.code}`));
            }

            resolve();

        });


        });

    }


    public search(id: string): Promise<Employee> {
    
        return new Promise((resolve, reject) => {

            var query = "SELECT * FROM employee WHERE id = ?";

            this.connection.query(query, id, (err, result) => {
                
                if(err) {
                    reject(new EmployeeError(`ERROR_TO_SEARCH_EMPLOYEE => ${err.code}`))
                }

                var data = result[0];

                resolve(new Employee(data["id"], data["name"], data["email"], data["password"]));

            });


        });

    }

    public searchByEmail(email: string): Promise<Employee> {

        return new Promise((resolve, reject) => {

            var query = "SELECT * FROM employee WHERE email = ?";

            this.connection.query(query, email, (err, result) => {

                if(err) {
                    reject(new EmployeeError("ERROR_TO_SEARCH_EMPLOYEE"));
                }
                
                var data = result[0];

                resolve(new Employee(data["id"], data["name"], data["email"], data["password"]));

            }); 

        });

    }


    public update(employee: Employee): Promise<void> {
        
        return new Promise((resolve, reject) => {

            var query = "UPDATE employee SET name = ? WHERE id = ?";
            var data = [employee.getName(), employee.getId()];

            this.connection.query(query, data, (err, result) => {

                if(err) {
                    reject(new EmployeeError(`ERROR_TO_UPDATE_EMPLOYEE => ${err.code}`));
                }

                resolve();

            });

        });

    }


    public delete(employee: Employee): Promise<void> {
        
        return new Promise((resolve, reject) => {

            var query = "DELETE FROM employee WHERE id = ?";
            
            this.connection.query(query, employee.getId(), (err, result) => {

                if(err) {
                    reject(`ERROR_TO_DELETE_EMPLOYEE => ${err.code}`);
                }
                
                resolve();

            });

        });

    }

}