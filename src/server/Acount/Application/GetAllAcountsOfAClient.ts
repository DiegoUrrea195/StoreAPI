import { AcountError } from "../Domain/AcountError";
import { AcountJson } from "../Domain/AcountJson";
import { AcountRepository } from "../Domain/AcountRepository";

export class GetAllAcountOfAClient {

    private repository: AcountRepository;

    public constructor(repository: AcountRepository) {
        this.repository = repository;
    }

    public async getAllAcountOfAClient(id: string): Promise<AcountJson[] | AcountError> {

        var data: AcountJson[] = [] 

        try {
            
            var acounts = await this.repository.getCountsOfClient(id);

            acounts.forEach(function (a) {

                data.push({id: a.id, value: a.value, client: a.client, description: a.description, employee: a.employee, date:a.date});

            });   


        } catch (error) {
            throw error;
        }

        return data;


    }

}