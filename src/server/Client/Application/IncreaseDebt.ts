import { ClientRepository } from "../Domain/ClientRepository";
import { ClientError } from "../Domain/ClientError";



export class IncreaseDebt {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async increaseDebt(id: string, value: number): Promise<void | ClientError> {

        try {
            
            var client = await this.repository.search(id);
            client.addDebt(value); // comprobar entrada value
            
            await this.repository.update(client);
            
        } catch (error) {
            
            throw error;

        }
        
    } 

}