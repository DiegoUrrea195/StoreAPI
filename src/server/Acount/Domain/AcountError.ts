export class AcountError extends Error{
    
    private code: string;

    public constructor(message: string) {
        super(message);
        this.code = message;
    }

}