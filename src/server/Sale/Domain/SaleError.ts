export class SaleError extends Error{
    
    readonly code:string

    public constructor(error: string) {
        super(error);
        this.code = error;
    }

}