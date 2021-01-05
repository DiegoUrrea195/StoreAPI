import { SaleRepository } from "../../Sale/Domain/SaleRepository";
import { Employee } from "../Domain/Employee";
export class CreateNewSale {

    private repository: SaleRepository;

    public constructor(repository: SaleRepository) {
        this.repository = repository;
    }

    public async createNewSale(value: number, employee: Employee) {

        var flag: boolean;

        try {

            var sale = employee.makeSale(value);

            await this.repository.save(sale);

            flag = true;

        } catch (error) {

            flag = false;

        }

        return flag;


    }


}