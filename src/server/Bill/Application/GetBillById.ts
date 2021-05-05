import { BillError } from "../Domain/BillError";
import { BillJson } from "../Domain/BillJson";
import { BillRepository } from "../Domain/BillRepository";

export class GetBillById {

    private repository: BillRepository;

    public constructor(repository: BillRepository) {
        this.repository = repository;
    }

    public async getBillById(id: string): Promise<BillJson | BillError> {

        var json: BillJson;

        try {
            var bill = await this.repository.getBillById(id);

            json = {
                id: bill.id,
                company_name: bill.company_name,
                date: bill.date,
                employee: bill.employee,
                url_image: bill.url_image,
                value: bill.value
            }

        } catch (error) {
            throw error;
        }

        return json;

    }

}