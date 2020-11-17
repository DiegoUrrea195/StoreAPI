import { Client } from "../Domain/Client";
import { ClientRepository } from "../Domain/ClientRepository";

export class CreateNewClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async createClient(id: string, name: string) {

        var flag: boolean;
    
        try {
            
            var client = new Client(id, name, 0);
           
            await this.repository.save(client);

            flag = true;
        
        } catch (error) {

            console.log(error);

            flag = false;
            
        }

        return flag;

    }

}