import { Employee } from "../Domain/Employee";
import { EmployeeRepository } from "../Domain/EmployeeRepository";
import { createHash } from "../../Shared/util/bcrypt ";


export class CreateNewEmployee {

    private repository: EmployeeRepository;

    public constructor(repository: EmployeeRepository) {
        this.repository = repository;
    }

    public async createNewEmployee(id: string, name: string, email: string, password: string) {

        var flag: boolean;
        
        try {
            
            var hash = await createHash(password);

            var employee: Employee = new Employee(id, name, email, hash);
            this.repository.save(employee);

            flag = true;

        } catch (error) {
            
            console.log(error);
            flag = false;
            
        }
        
        return flag;

    }

}