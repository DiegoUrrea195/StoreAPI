import { Sale } from "./Sale";
import { SaleError } from "./SaleError";

export interface SaleRepository {

    save(sale: Sale): Promise<void | SaleError>;

    all(init: number, limit: number): Promise<Sale[] | SaleError>;
    
}