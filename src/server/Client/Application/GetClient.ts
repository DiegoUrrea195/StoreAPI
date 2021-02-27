import { ClientError } from "../Domain/ClientError";
import { ClientRepository } from "../Domain/ClientRepository";
import { ClientJson } from "../../../../src/server/Client/Domain/ClientJson";

export class GetClient {

    private repository: ClientRepository;

    public constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public async getClinet(id: string): Promise<ClientJson | ClientError> {
        
        var json:ClientJson

        try {

            var client = await this.repository.search(id);

            json = {
                "id": client.getId(),
                "name": client.getName(),
                "debt": client.getDebt()
            }    

        } catch (error) {
            throw error;
        }

        return json;       

    }



}