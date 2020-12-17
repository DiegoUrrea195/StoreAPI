import { Express } from "express";

export class ExpressServer {

    private server: Express

    public constructor(express: Express) {
        this.server = express;
    }

    public start(port: number): void {
        this.server.listen(port, () => {
            console.log("server up");
            
        })
    }

}