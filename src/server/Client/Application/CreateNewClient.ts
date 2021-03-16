import { Client } from "../Domain/Client";
import { ClientError } from "../Domain/ClientError";
import { ClientRepository } from "../Domain/ClientRepository";

export class CreateNewClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async createClient(id: string, name: string): Promise<void | ClientError>{
    
        try {
            // Analizar entrada del nombre para evitar injecciones SQL
            var client = new Client(id, name, 0);           
            await this.repository.save(client);
        
        } catch (error) {
            
            throw error;
            
        }

    }

}