import { Router } from "express";

export const authRouter = Router();


authRouter.post("/signUp", (req, res) => {
    res.send("Error");    
});

authRouter.post("/signIn", (req, res) => {
    
});

authRouter.get("/signOut", (req, res) => {

});