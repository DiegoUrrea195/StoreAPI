import { ClientRepository } from "../Domain/ClientRepository";
import { Client } from "../Domain/Client";

export class PayBillClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async payBillClient(client: Client, value: number) {

        var flag: boolean;

        
        try {    
            
            client.payDebt(value);
            
            await this.repository.update(client);

            flag = true;


        }catch(err) {
            
            flag = false;

        }

        return flag;

    }

}