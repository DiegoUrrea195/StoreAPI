import { Sale } from "../Domain/Sale";
import { SaleRepository } from "../Domain/SaleRepository";
import { createUuid } from "../../Shared/util/uuid";

export class CreateNewSale {

    private repository: SaleRepository;

    public constructor(repository: SaleRepository) {
        this.repository = repository;
    }

    public async createNewSale(value: number, employee: string) {

        var flag: boolean;

        try {

            var date = new Date();
            var dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
            
            var sale: Sale = new Sale(createUuid(), value, employee, dateString);

            await this.repository.save(sale);

            flag = true;

        } catch (error) {

            flag = false;

        }

        return flag;


    }


}