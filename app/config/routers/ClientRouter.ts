import { Router } from "express";
import { createNewClient } from "../controllers/ClientController";

export const clientRouter = Router();

clientRouter.get("/client/:id", (req, res) => {

});

clientRouter.post("/new/client", (req, res) => {
    createNewClient(req, res);
});
