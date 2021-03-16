import { Acount } from "./Acount";

export interface AcountRepository {

    getCountsOfClient(id: string): Promise<Acount[]>

    save(acount: Acount): void;


}