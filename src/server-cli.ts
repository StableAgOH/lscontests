#!/usr/bin/env node
import { Command } from "commander";
import { bin, version } from "../package.json";
import app from "./server";
import express from "express";

const command = new Command()
    .name(Object.keys(bin)[1])
    .version(version)
    .option("-h, --host, <host>", "Host to listen on", "0.0.0.0")
    .option("-p, --port, <port>", "Port to listen on", "8080");
command.parse();

const host = command.opts().host as string;
let port: number | string = command.opts().port as string;
port = parseInt(port, 10);

app.use(express.static(`${__dirname}/../public`));

app.listen(port, host, () =>
{
    const logURL = `http://${host === "0.0.0.0" ? "127.0.0.1" : host}:${port}/`;
    console.log(`LSCT server v${version} listening on ${logURL}`);
});
