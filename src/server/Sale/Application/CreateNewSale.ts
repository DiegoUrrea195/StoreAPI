import { Sale } from "../Domain/Sale";
import { SaleRepository } from "../Domain/SaleRepository";
import { createUuid } from "../../Shared/util/uuid";

export class CreateNewSale {

    private repository: SaleRepository;

    public constructor(repository: SaleRepository) {
        this.repository = repository;
    }

    public async createNewSale(sale: Sale) {

        var flag: boolean;

        try {
            
            await this.repository.save(sale);

            flag = true;

        } catch (error) {

            flag = false;

        }

        return flag;


    }


}