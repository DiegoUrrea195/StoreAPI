import { createDate } from "../../Shared/util/date";
import { createUuid } from "../../Shared/util/uuid";
import { Sale } from "../Domain/Sale";
import { SaleError } from "../Domain/SaleError";
import { SaleRepository } from "../Domain/SaleRepository";

export class CreateNewSale {

    private repository: SaleRepository;

    public constructor(repository: SaleRepository) {
        this.repository = repository;
    }

    public async createNewSale(value: number, employee_id: string): Promise<void | SaleError>{

        try {
            
            var sale = new Sale(createUuid(), value, employee_id, createDate());
            await this.repository.save(sale);

        } catch (error) {
            throw error;
        }

    }


}