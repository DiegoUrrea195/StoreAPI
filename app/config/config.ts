import { urlencoded } from "express";
import { clientRouter } from "./routers/ClientRouter";

const express = require("express");

export const app = express();

app.use(urlencoded({ extended: true }));
app.use(clientRouter);