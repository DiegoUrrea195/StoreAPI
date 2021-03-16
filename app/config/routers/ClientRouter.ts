import { Router } from "express";
import { createNewClient } from "../controllers/client/createNewClient";
import { increaseDebt } from "../controllers/client/increaseDebt";
import { payBill } from "../controllers/client/payBill";
import { getClient } from "../controllers/client/getClient";
import { deleteClient } from "../controllers/client/deleteClient";
import { getAllClients } from "../controllers/client/getAllClients";
<<<<<<< HEAD
=======

>>>>>>> bc52d51

export const clientRouter = Router();

clientRouter.get("/client/:id", (req, res) => {
    getClient(req, res);
});

clientRouter.post("/client/new", (req, res) => {
    createNewClient(req, res);
});

clientRouter.get("/client/all", (req, res) => {
    getAllClients(req, res);
});

<<<<<<< HEAD
clientRouter.put("/client/increasedebt/:id", (req, res) => {
    increaseDebt(req, res);
});

clientRouter.put("/client/paybill/:id", (req, res) => {
=======
clientRouter.patch("/client/increasedebt/:id", (req, res) => {
    increaseDebt(req, res);
});

clientRouter.patch("/client/paybill/:id", (req, res) => {
>>>>>>> bc52d51
    payBill(req, res);
});

clientRouter.delete("/client/delete/:id", (req, res) => {
    deleteClient(req, res);
});
