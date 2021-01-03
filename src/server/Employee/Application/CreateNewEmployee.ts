import { Employee } from "../Domain/Employee";
import { EmployeeRepository } from "../Domain/EmployeeRepository";

export class CreateNewEmployee {

    private repository: EmployeeRepository;

    public constructor(repository: EmployeeRepository) {
        this.repository = repository;
    }

    public async createNewEmployee(id: string, name: string) {

        var flag: boolean;
        
        try {
            
            var employee: Employee = new Employee(id, name);
            this.repository.save(employee);

            flag = true;

        } catch (error) {
            
            console.log(error);
            flag = false;
            
        }
        
        return flag;

    }

}