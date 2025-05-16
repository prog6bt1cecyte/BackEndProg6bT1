"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const serve = app_1.default.instance;
serve.start(() => {
    console.log(`Server running on the port ${serve.port}`);
});
//# sourceMappingURL=server.js.map