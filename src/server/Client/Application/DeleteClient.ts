import { ClientError } from "../Domain/ClientError";
import { ClientRepository } from "../Domain/ClientRepository";

export class DeleteClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository){
        this.repository = repository;
    }

    public async deleteClient(id: string): Promise<void | ClientError> {

        try {
<<<<<<< HEAD

            await this.repository.search(id)

=======
            
            await this.repository.search(id); // si no lanza un error es por que el usuario existe y se puede eliminar
>>>>>>> bc52d51
            await this.repository.delete(id);

        } catch (error) {

            throw error;

        }


    }
    
}