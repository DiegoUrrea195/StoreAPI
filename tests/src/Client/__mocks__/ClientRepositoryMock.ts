import { Client } from "../../../../src/server/Client/Domain/Client";
import { ClientRepository } from "../../../../src/server/Client/Domain/ClientRepository";
import { ClientError } from "../../../../src/server/Client/Domain/ClientError";

export class ClientRepositoryMock implements ClientRepository{

    private mock = jest.fn();

    save(client: Client): void {
        this.mock(client);
    }

    search(id: string): Promise<Client> {
        return this.mock(id);
    }

    update(client: Client): void {
        throw new Error("Method not implemented.");
    }

    all(): Promise<Client[]> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): void {
        throw new Error("Method not implemented.");
    }

}