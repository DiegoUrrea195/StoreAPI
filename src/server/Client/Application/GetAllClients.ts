import { ClientError } from "../Domain/ClientError";
import { ClientJson } from "../Domain/ClientJson";
<<<<<<< HEAD
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

=======
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
            
>>>>>>> bc52d51
        } catch (error) {
            throw error;
        }

<<<<<<< HEAD
        return JClients;
=======
        return data;
>>>>>>> bc52d51

    }

}