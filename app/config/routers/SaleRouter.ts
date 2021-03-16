import { Router } from "express";
import { createNewSale } from "../controllers/sale/createNewSale";
import { getAllSales } from "../controllers/sale/getAllSales";

export const saleRouter = Router();

saleRouter.get("/sale/", (req, res) => {
    getAllSales(req, res);
});

saleRouter.post("/sale/new", (req, res) => {
    createNewSale(req, res);
});