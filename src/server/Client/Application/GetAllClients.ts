import { ClientError } from "../Domain/ClientError";
import { ClientJson } from "../Domain/ClientJson";
import { MySQLClientRepository } from "../Infrastructure/MySQLClientRepository";

export class GetAllClients {

    private repository: MySQLClientRepository;

    public constructor(reposiory: MySQLClientRepository) {
        this.repository = reposiory;
    }

    public async getAllClients(init: number, limit: number): Promise<ClientJson[] | ClientError> {

        var data: ClientJson[] = [];
        
        try {

            var clients = await this.repository.all(init, limit);
            clients.forEach(client => {
                data.push({id: client.getId(), name: client.getName(), debt: client.getDebt()});
            });
            
        } catch (error) {
            throw error;
        }

        return data;

    }

}