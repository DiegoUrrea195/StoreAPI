import { ClientError } from "../Domain/ClientError";
import { ClientJson } from "../Domain/ClientJson";
import { ClientRepository } from "../Domain/ClientRepository";

export class GetAllClients {

    private reposistory: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.reposistory = repository;
    }

    public async getAllClients(init: number, limit: number): Promise<ClientError | ClientJson[]> {

        var JClients: ClientJson[];

        try {
            
            var clients = await this.reposistory.all(init, limit);
            clients.forEach(e => {
                JClients.push({id: e.getId(), name: e.getName(), debt: e.getDebt()});
            });

        } catch (error) {
            throw error;
        }

        return JClients;

    }

}