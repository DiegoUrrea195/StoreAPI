import { Router } from "express";
import multer from "multer";
import { createNewBill } from "../controllers/bill/createNewBill";

const upload = multer({dest: `${__dirname}/tmp`});


export const billRouter = Router();

billRouter.post("/bill/new", upload.single("file"), (req, res) => {
    createNewBill(req, res);
});