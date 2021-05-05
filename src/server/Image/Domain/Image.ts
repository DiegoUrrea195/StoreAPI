export class Image {

    private id: string;
    private data: Buffer;

    public constructor(id: string, data: Buffer) {
        this.id = id;
        this.data = data;
    }

    

}