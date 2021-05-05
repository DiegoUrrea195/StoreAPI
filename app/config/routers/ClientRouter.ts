import { Router } from "express";
import { createNewClient } from "../controllers/client/createNewClient";
import { increaseDebt } from "../controllers/client/increaseDebt";
import { payBill } from "../controllers/client/payBill";
import { getClient } from "../controllers/client/getClient";
import { deleteClient } from "../controllers/client/deleteClient";
import { getAllClients } from "../controllers/client/getAllClients";

export const clientRouter = Router();

clientRouter.get("/client/:id", (req, res) => {
    getClient(req, res);
});

clientRouter.post("/client/new", (req, res) => {
    createNewClient(req, res);
});

clientRouter.get("/client/all/for", (req, res) => {
    getAllClients(req, res);
});

clientRouter.put("/client/increasedebt/:id", (req, res) => {
    increaseDebt(req, res);
});

clientRouter.put("/client/paybill/:id", (req, res) => {
    payBill(req, res);
});

clientRouter.delete("/client/delete/:id", (req, res) => {
    deleteClient(req, res);
});
