"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const _ = require("lodash");
const usuario_model_1 = require("../models/usuario.model");
class UsuarioController {
    constructor() {
        this.crearUsuario = (req, res) => {
            const nuevoUsuario = new usuario_model_1.default({
                apellidoPaterno: req.body.apellidoPaterno,
                apellidoMaterno: req.body.apellidoMaterno,
                nombre: req.body.nombre,
                userName: req.body.userName,
                password: req.body.password,
                role: req.body.role
            });
            nuevoUsuario.save()
                .then(usuarioCreado => {
                res.status(201).json({
                    ok: true,
                    usuario: usuarioCreado,
                    message: 'Usuario cread0'
                });
            })
                .catch(error => {
            });
        };
        this.obtenerUsuarios = (req, res) => {
            usuario_model_1.default.find()
                .then(usuarios => {
                res.status(201).json({
                    ok: true,
                    usuarios: usuarios
                });
            })
                .catch(error => {
                return res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.actualizarUsuario = (req, res) => {
            const usuario = _.pick(req.body, 'apellidoPaterno', 'apellidoMaterno', 'nombre', 'role');
            usuario_model_1.default.findByIdAndUpdate(req.params.id, usuario)
                .then((usuarioActualizado) => __awaiter(this, void 0, void 0, function* () {
                res.status(200).json({
                    ok: true,
                    usuario: usuarioActualizado,
                    message: 'Usuario Actualizado'
                });
            }))
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.eliminarUsuario = (req, res) => {
            usuario_model_1.default.findByIdAndDelete(req.params.id)
                .then(usuarioEliminado => {
                res.status(200).json({
                    ok: true,
                    message: 'Usuario Eliminado'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map