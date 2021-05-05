export class Bill {

    readonly id: string;
    readonly company_name: string;
    readonly value: number;
    readonly date: string;
    readonly url_image: string;
    readonly employee: string;

    public constructor(id: string, company_name: string, value: number, date: string, url_image: string, employee: string) {
        this.id = id;
        this.company_name = company_name;
        this.value = value;
        this.date = date;
        this.url_image = url_image;
        this.employee = employee;
    }

}