import { app } from "./config/config";
import { ExpressServer } from "../src/server/Shared/Express/ExpressServer";

const server = new ExpressServer(app);

server.start(8080);