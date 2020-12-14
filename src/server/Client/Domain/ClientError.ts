export class ClientError extends Error {
    
    public constructor(error: string) {
        super(error);
    }
}