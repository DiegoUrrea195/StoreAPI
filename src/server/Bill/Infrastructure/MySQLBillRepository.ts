import { Pool } from "mysql";
import { ImageError } from "../../Image/Domain/ImageError";
import { Bill } from "../Domain/Bill";
import { BillError } from "../Domain/BillError";
import { BillRepository } from "../Domain/BillRepository";

export class MySQLBillRepository implements BillRepository{

    private connection: Pool;

    public constructor(connection: Pool) {
        this.connection = connection;
    }

    save(bill: Bill): Promise<void> {

        return new Promise((resolve, reject) => {

            var query = "INSERT INTO bill(id, company_name, value, date, url_image, employee) VALUES (?,?,?,?,?,?)";
            var data = [bill.id, bill.company_name, bill.value, bill.date, bill.url_image, bill.employee];

            this.connection.query(query, data, (err) => {

                if(err) {
                    reject(new BillError("ERROR_TO_INSERT_BILL"));
                }

                resolve(); 

            });

        });

    }

    all(init: number, limit: number): Promise<Bill[]> {
        
        return new Promise((resolve, reject) => {

            var query = `SELECT * FROM bill limit ${init}, ${limit}`;
            var data: Bill[] = [];

            this.connection.query(query, (err, result) => {

                if(err) {
                    reject(new BillError("ERROR_TO_GET_ALL_BILLS"));
                }


                result.forEach(function (bill: any) {
                    data.push(new Bill(bill["id"], bill["company_name"], bill["value"], bill["date"], bill["url_image"], bill["employee"]));
                });

                resolve(data);

            });

        });


    }
    getBillsByNameCompany(name: string): Promise<Bill[]> {
        
        return new Promise((resolve, reject) => {

            var query = `SELECT * FROM bill WHERE company_name = "${name}"`;
            var data: Bill[] = [];

            this.connection.query(query, (err, result) => {

                if(err) {
                    reject(new BillError("ERROR_TO_GET_ALL_BILLS"));
                }

                result.forEach(function (bill: any) {
                    data.push(new Bill(bill["id"], bill["company_name"], bill["value"], bill["date"], bill["url_image"], bill["employee"]));
                });

                resolve(data);

            });
        });

    }

    getBillById(id: string): Promise<Bill> {
        
        return new Promise((resolve, reject) => {

            var query = `SELECT * FROM bill WHERE id = "${id}"`;

            this.connection.query(query, (err, result) => {

                if(err) {
                    reject(new BillError("ERROR_TO_GET_THE_BILL"));
                }

                if(typeof(result[0]) == "undefined") {
                    reject(new BillError("BILL_NOT_EXIST"));
                }else {
                    var bill = result[0]
                    resolve( new Bill(bill["id"], bill["company_name"], bill["value"], bill["date"], bill["url_image"], bill["employee"]) );
                }  

            });

        })

    }

}