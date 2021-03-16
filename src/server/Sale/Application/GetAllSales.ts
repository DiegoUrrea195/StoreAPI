import { SaleError } from "../Domain/SaleError";
import { SaleJson } from "../Domain/SaleJson";
import { MySQLSaleRepository } from "../Infrastructure/MySQLSaleRepository";

export class GetAllSales {

    private repository: MySQLSaleRepository;

    public constructor(repository: MySQLSaleRepository) {
        this.repository = repository;
    }

    public async getAllSales(init: number, limit: number): Promise<SaleJson[] | SaleError> {

        var data: SaleJson[] = [];    
        
        try {

            var sales = await this.repository.all(init, limit);
            sales.forEach(sale => {
                data.push({id: sale.getId(), value: sale.getValue(), employee: sale.getEmployee(), date: sale.getDate()});
            });

        } catch (error) {
            throw error;
        }

        return data;


    }
    
}