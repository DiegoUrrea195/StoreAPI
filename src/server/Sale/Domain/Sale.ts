import { createUuid } from "../../Shared/util/uuid";

export class Sale {

    private id: string;
    private value: number;
    private employee_id: string;
    private date: string;

    public constructor(value: number, employee_id: string, date: string) {

        this.id = createUuid();
        this.value = value;
        this.employee_id = employee_id;
        this.date = date;

    }


    public getId(): string {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getEmployee(): string {
        return this.employee_id;
    }

    public getDate(): string {
        return this.date;
    }









}