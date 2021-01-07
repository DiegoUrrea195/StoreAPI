import { authenticate } from "passport";
import { Request, Response } from "express";

export  const authSignIn = authenticate("local", {
    successMessage: "Succes",
    failureMessage: "Error"
});

export function authSignOut(req: Request, res: Response) {

    req.logout();
    res.send("Succes");

}