import { Sale } from "../../Sale/Domain/Sale";

export class Employee {

    private id: string;
    private name: string;
    private email: string;
    private password: string;

    public constructor(id: string, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }


    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public rename(name: string): void {
        this.name  = name;
    }

    public makeSale(value: number): Sale {

        var date = new Date();
        var dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;

        var sale: Sale = new Sale(value, this.id, dateString);

        return sale;

    }


}