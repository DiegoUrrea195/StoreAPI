import { Router } from "express";
import { createNewClient } from "../controllers/client/createNewClient";
import { increaseDebt } from "../controllers/client/increaseDebt";
import { payBill } from "../controllers/client/payBill";
import { getClient } from "../controllers/client/getClient";

export const clientRouter = Router();

clientRouter.get("/client", (req, res) => {
    getClient(req, res);
});

clientRouter.post("/client/new", (req, res) => {
    createNewClient(req, res);
});

clientRouter.get("/client/all", (req, res) => {
    
});

clientRouter.put("/client/incresedebt", (req, res) => {
    increaseDebt(req, res);
});

clientRouter.put("/client/paybill", (req, res) => {
    payBill(req, res);
});
