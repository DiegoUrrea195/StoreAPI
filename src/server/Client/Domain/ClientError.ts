export class ClientError extends Error {
    
<<<<<<< HEAD
    readonly code: string

    public constructor(error: string) {
        super(error);
        this.code = error
=======
    readonly code: string;

    public constructor(error: string) {
        super(error);
        this.code = error;
>>>>>>> bc52d51
    }
    
}