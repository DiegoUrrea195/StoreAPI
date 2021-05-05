import { Sale } from "../../Sale/Domain/Sale";
import { SaleRepository } from "../../Sale/Domain/SaleRepository";
import { createDate } from "../../Shared/util/date";
import { createUuid } from "../../Shared/util/uuid";
import { Acount } from "../Domain/Acount";
import { AcountError } from "../Domain/AcountError";
import { AcountRepository } from "../Domain/AcountRepository";

export class CreateNewAcunt {

    private repository: AcountRepository;

    public constructor(repository: AcountRepository) {
        this.repository = repository;
    }

    public async createNewAcount(value: number, client: string, employee: string, description: string): Promise<void | AcountError> {

        try {       
            var acount = new Acount(createUuid(), value, description, client, employee, createDate());
            await this.repository.save(acount);

        } catch (error) {
            throw error;
        }


    }

}