import { urlencoded } from "express";
import { clientRouter } from "./routers/ClientRouter";
import { REDISconnection } from "./globals";


const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const passport = require("passport");

export const app = express();

app.use(urlencoded({ extended: true }));
app.use(session({
    secret: "diego", // cambiar por variable de entorno
    resave: true,
    saveUninitialized: true,
    store: new RedisStore({ client: REDISconnection.getConnection() })
}));
app.use(passport.initialize());
app.use(passport.session());



// Router 
app.use(clientRouter);
