import { Bill } from "./Bill";

export interface BillRepository {

    save(bill: Bill): void;

    all(init: number, limit: number): Promise<Bill[]>

    getBillsByNameCompany(name: string): Promise<Bill[]>

    getBillById(id: string): Promise<Bill>;

}