"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRoutes = void 0;
const usuario_controller_1 = require("../controllers/usuario.controller");
class UsuarioRoutes {
    constructor() {
        this.usuarioController = new usuario_controller_1.UsuarioController();
    }
    routes(app) {
        app.route('/usuario')
            .get(this.usuarioController.obtenerUsuarios)
            .post(this.usuarioController.crearUsuario);
        app.route('/usuario/:id')
            .put(this.usuarioController.actualizarUsuario)
            .delete(this.usuarioController.eliminarUsuario);
    }
}
exports.UsuarioRoutes = UsuarioRoutes;
//# sourceMappingURL=usuario.routes.js.map