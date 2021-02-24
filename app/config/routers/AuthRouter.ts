import { Router } from "express";
import { authSignIn, authSignOut } from "../controllers/auth/auth";

export const authRouter = Router();


authRouter.post("/signUp", (req, res) => {

});

authRouter.post("/signIn", (req, res, next) => {
    authSignIn(req, res, next);
});

authRouter.get("/signOut", (req, res) => {
    authSignOut(req, res);
});