import { Client } from "./Client";

export interface ClientRepository
{
    save(client: Client): void;

    search(id: string): Promise<Client>;

    update(client: Client): void;

    all(init: number, limit: number): Promise<Client[]>

    delete(id: string): void
    
}