import { ClientRepository } from "../Domain/ClientRepository";
import { ClientError } from "../Domain/ClientError";

export class PayBillClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async payBillClient(id: string, value: number): Promise<void | ClientError> {

        
        try {    
            
            var client = await this.repository.search(id);

            client.payDebt(value);
            
            await this.repository.update(client);

        }catch(error) {
            
            throw error;

        }

    }

}