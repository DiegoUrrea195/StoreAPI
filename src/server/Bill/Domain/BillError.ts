export class BillError extends Error{
    
    readonly code;
    public constructor(err: string) {
        super(err);
        this.code = err;
    }

}