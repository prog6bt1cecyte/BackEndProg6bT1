import { CorralController } from "../controllers/corral.controller";

export class CorralRoutes {
    private corralController: CorralController = new CorralController();
    public routes(app): void {
        app.route('/corral')
        .get(this.corralController.obtenerCorrals)
        .post(this.corralController.crearCorral);

        app.route('/corral/:id')
        .put(this.corralController.actualizarCorral)
        .delete(this.corralController.eliminarCorral);
    }
}