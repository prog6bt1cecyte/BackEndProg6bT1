"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map