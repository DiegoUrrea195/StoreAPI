import { ClientError } from "../Domain/ClientError";
import { ClientRepository } from "../Domain/ClientRepository";

export class DeleteClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository){
        this.repository = repository;
    }

    public async deleteClient(id: string): Promise<void | ClientError> {

        try {

            await this.repository.search(id)

            await this.repository.delete(id);

        } catch (error) {

            throw error;

        }


    }
    
}