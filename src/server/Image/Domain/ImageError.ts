export class ImageError extends Error{
    readonly code: string;
    public constructor(err: string) {
        super(err);
        this.code = err;
    }
}