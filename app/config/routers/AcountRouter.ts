import { Router } from "express";
import { createNewAcount } from "../controllers/acount/createNewAcount";
import { getAllAcountOfAClient } from "../controllers/acount/getAllAcountOfAClient";

export const acountRouter = Router();

acountRouter.get("/acount/:id", (req, res) => {
    getAllAcountOfAClient(req, res);
});

acountRouter.post("acount/new", (req, res) => {
    createNewAcount(req, res);
});