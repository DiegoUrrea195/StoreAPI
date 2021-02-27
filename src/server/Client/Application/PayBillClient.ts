import { ClientRepository } from "../Domain/ClientRepository";
import { Client } from "../Domain/Client";
import { ClientError } from "../Domain/ClientError";

export class PayBillClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async payBillClient(client: Client, value: number): Promise<void | ClientError> {

        
        try {    
            
            client.payDebt(value);
            
            await this.repository.update(client);

        }catch(error) {
            
            throw error;

        }

    }

}