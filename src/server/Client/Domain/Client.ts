import { ClientError } from "./ClientError";

export class Client 
{

    private id: string;
    private name: string;
    private debt: number;

    public constructor(id: string, name: string, debt: number) 
    {
        this.id = id;
        this.name = name;
        this.debt = debt;
    }

    public getId(): string
    {
        return this.id;
    }

    public getName(): string
    {
        return this.name;
    }

    public getDebt(): number 
    {
        return this.debt;
    }

    public rename(name: string): void
    {
        this.name = name;
    }

    public payDebt(pay: number): void 
    {

        if(pay > this.debt) {
            throw new ClientError("Payment exceeds current debt");
        }

        var auxdebt: number = this.debt;

        var result = (auxdebt - pay);

        this.debt = result;

    }

    public addDebt(value: number): void {
        
        var auxdebt: number = this.debt;
        
        var result: number = (auxdebt + value);

        this.debt = result;

    }

    



}