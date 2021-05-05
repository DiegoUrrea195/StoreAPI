import { createDate } from "../../Shared/util/date";
import { createUuid } from "../../Shared/util/uuid";
import { Bill } from "../Domain/Bill";
import { BillError } from "../Domain/BillError";
import { BillRepository } from "../Domain/BillRepository";

export class CreateNewBill {

    private repository: BillRepository;

    public constructor(repository: BillRepository) {
        this.repository = repository;
    }

    public async createNewBill(company_name: string, value: number, url_image: string, employee: string): Promise<void | BillError> {
        
        try {
            var bill = new Bill(createUuid(), company_name, value, createDate(), url_image, employee);
            await this.repository.save(bill);
        } catch (error) {
            throw error;
        }

    }

}