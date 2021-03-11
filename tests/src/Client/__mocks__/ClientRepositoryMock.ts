import { Client } from "../../../../src/server/Client/Domain/Client";
import { ClientRepository } from "../../../../src/server/Client/Domain/ClientRepository";
import { ClientError } from "../../../../src/server/Client/Domain/ClientError";

export class ClientRepositoryMock implements ClientRepository{

    data: any[]

    public constructor() {
        this.data = [{id: "1", name: "diego", debt: 2500 },
        {id: "2", name: "jose", debt: 8500 },
        {id: "3", name: "rodrigo", debt: 6200 }];
    }

    save(client: Client): void {
        if(client.getId() == "false") {
            throw new ClientError("CLIENT_ERROR");
        }

        this.data.push({id: client.getId(), name: client.getName(), debt: client.getDebt()});
        
    }

    search(id: string): Promise<Client|null> {
        if(id == "false") {
            throw new ClientError("CLIENT_ERROR");
        }

        var data = this.data.find(e =>  e.id == id );

        if(data == undefined) {
            throw new ClientError("CLIENT_ERROR");
        }

        return new Promise(resolve => {
            resolve(new Client(data.id, data.name, data.debt));
        });
    }

    update(client: Client): void {
        if(client.getId() == "false") {
            throw new ClientError("CLIENT_ERROR");
        }

        this.data.forEach(element => {
            if(element.id == client.getId()) {
                element.debt = client.getDebt();
            }
        });
    }

    all(): Promise<Client[]> {
        throw new ClientError("Method not implemented.");
    }

    delete(id: string): void {
        if(id == "false") {
            throw new ClientError("CLIENT_ERROR");
        }

        var client;

        this.data.forEach(e => {
            if(e.id == id) {
                client = this.data.indexOf(e);
            }
        });

        this.data.splice(client, 1);

    }

}