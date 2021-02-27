import { ClientRepository } from "../Domain/ClientRepository";
import { Client } from "../Domain/Client";
import { ClientError } from "../Domain/ClientError";



export class IncreaseDebt {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async increaseDebt(client: Client, value: number): Promise<void | ClientError> {

        try {
                        
            client.addDebt(value);
            await this.repository.update(client);
            
        } catch (error) {
            
            throw error;

        }
        
    } 

}