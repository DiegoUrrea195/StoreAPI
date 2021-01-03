import { Employee } from "./Employee";

export interface EmployeeRepository {

    save(employee: Employee): void;

    search(id: string): Promise<Employee>;

    update(employee: Employee): void;

    delete(employee: Employee): void;

}