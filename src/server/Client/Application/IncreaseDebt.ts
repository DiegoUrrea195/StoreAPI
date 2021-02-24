import { ClientRepository } from "../Domain/ClientRepository";
import { Client } from "../Domain/Client";



export class IncreaseDebt {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async increaseDebt(client: Client, value: number) {

        var flag: boolean;

        try {
                        
            client.addDebt(value);
            
            await this.repository.update(client);

            flag = true;
            
        } catch (error) {
            
            flag = false;

        }

        return flag;

    } 

}