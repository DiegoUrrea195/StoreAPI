import { urlencoded } from "express";
//import { REDISconnection } from "./globals";

import { clientRouter } from "./routers/ClientRouter";
import { acountRouter } from "./routers/AcountRouter";
import { saleRouter } from "./routers/SaleRouter";
//import { authRouter } from "./routers/AuthRouter";

const express = require("express");
//const session = require("express-session");
//const RedisStore = require("connect-redis")(session);
//const passport = require("passport");

export const app = express();

app.use(urlencoded({ extended: true }));

//app.use(session({
//    secret: "diego", // cambiar por variable de entorno
//    resave: true,
//    saveUninitialized: true,
//    store: new RedisStore({ client: REDISconnection.getConnection() })
//}));

//app.use(passport.initialize());
//app.use(passport.session());

//require("./controllers/auth/passport");

// Router 
//app.use(authRouter);
app.use(clientRouter);
app.user(saleRouter);
app.user(acountRouter);

