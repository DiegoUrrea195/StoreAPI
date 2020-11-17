import { Client } from "./Client";

export interface ClientRepository
{
    save(client: Client): void;

    search(id: number): Promise<Client>;

    update(client: Client): void;

    all(): Promise<Client[]>
    
}