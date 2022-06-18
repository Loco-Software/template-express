import { ConfigFile } from "./Models";
import express, { Express } from "express";
import { Server } from "http";
import path from "path";

export class ExpressServer {
    private _application: Express
    private _server?: Server

    constructor(private _config: ConfigFile) {
        this._application = express()
    }

    public listen = (callback?: (() => void)) => {
        this._server = this._application.listen(this._config.server.http.port, callback)
    }

    public configureHttpPipeline = () => {}

    public configureServices = () => {
        this._application.use(express.static(path.join(__dirname, 'Public')))
    }
}