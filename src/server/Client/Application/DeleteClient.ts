import { ClientRepository } from "../Domain/ClientRepository";

export class DeleteClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository){
        this.repository = repository;
    }

    public async deleteClient(id: string) {

        var flag: boolean;

        try {

            await this.repository.delete(id)
            flag = true

        } catch (error) {
            flag = false
        }

        return flag;

    }
    
}