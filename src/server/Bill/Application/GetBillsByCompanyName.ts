import { BillError } from "../Domain/BillError";
import { BillJson } from "../Domain/BillJson";
import { BillRepository } from "../Domain/BillRepository";

export class GetBillByCompanyName {

    private repository: BillRepository;

    public constructor(repository: BillRepository) {
        this.repository = repository;
    }

    public async getBillByCompanyName(name: string): Promise<BillJson[] | BillError> {

        var data: BillJson[] = [];
        try {
            
            var bills = await this.repository.getBillsByNameCompany(name);

            bills.forEach(function(bill) {
                data.push({
                    id: bill.id,
                    company_name: bill.company_name,
                    date: bill.date,
                    employee: bill.employee,
                    url_image: bill.url_image,
                    value: bill.value
                });
            });

        } catch (error) {
            throw error;
        }

        return data;

    }


}