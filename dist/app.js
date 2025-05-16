"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const routes_1 = require("./routes");
const config_1 = require("./config");
class App {
    constructor() {
        this.routes = new routes_1.Routes();
        this.app = express();
        this.port = config_1.SERVER_PORT;
        this.config();
        this.httpServer = new http.Server(this.app);
        this.routes.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json({ limit: '8192mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '8192mb', extended: true }));
        this.app.use(function (req, res, next) {
            // Set CORS headers                        
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            next();
        });
        this.app.use(cors({ origin: '*', credentials: false }));
        this.app.get('/', (req, res) => {
            res.status(200).json({
                ok: true,
                port: config_1.SERVER_PORT,
                date: new Date()
            });
        });
    }
    mongoSetup() {
        mongoose
            .connect(config_1.MONGO_URL, {
            serverSelectionTimeoutMS: 30000, // 30 seconds to connect to the server
            socketTimeoutMS: 300000, // 5 minutes
        })
            .then(() => {
            console.log('Database ONLINE');
        })
            .catch((error) => {
            console.error('Error connecting to database:', error);
        });
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map