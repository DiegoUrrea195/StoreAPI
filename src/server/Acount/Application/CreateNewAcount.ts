import { Sale } from "../../Sale/Domain/Sale";
import { SaleRepository } from "../../Sale/Domain/SaleRepository";
import { createDate } from "../../Shared/util/date";
import { createUuid } from "../../Shared/util/uuid";
import { Acount } from "../Domain/Acount";
import { AcountError } from "../Domain/AcountError";
import { AcountRepository } from "../Domain/AcountRepository";

export class CreateNewAcunt {

    private repository: AcountRepository;
    private saleRepository: SaleRepository;

    public constructor(repository: AcountRepository, saleRepository: SaleRepository) {
        this.repository = repository;
        this.saleRepository = saleRepository;
    }

    public async createNewAcount(value: number, client: string, employee: string, description: string): Promise<void | AcountError> {

        try {

            var sale = new Sale(createUuid(), value, employee, createDate());
            await this.saleRepository.save(sale);
            
            var acount = new Acount(createUuid(), value, description, client, employee, createDate());
            await this.repository.save(acount);

        } catch (error) {
            throw error;
        }


    }

}