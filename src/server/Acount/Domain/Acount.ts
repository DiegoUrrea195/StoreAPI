export class Acount {

    readonly id: string;
    readonly value: number;
    readonly description: string;
    readonly client: string;
    readonly employee: string;
    readonly date: string;

    public constructor(id: string, value: number, description: string, client: string, employee: string, date: string) {
        this.id = id;
        this.value = value;
        this.description = description;
        this.client = client;
        this.employee = employee;
        this.date = date;
    }


}