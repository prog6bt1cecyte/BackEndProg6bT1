"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let validRoles = {
    values: config_1.ROLES,
    message: '{VALUE} is not a valid role'
};
const UsuarioSchema = new Schema({
    apellidoPaterno: {
        type: String,
        required: [true, 'apellidoPaterno required']
    },
    apellidoMaterno: {
        type: String,
        required: [true, 'apellidoMaterno required']
    },
    nombre: {
        type: String,
        required: [true, 'nombre required']
    },
    userName: {
        type: String,
        unique: true,
        required: [true, 'userName required']
    },
    password: {
        type: String,
        required: [true, 'password required']
    },
    role: {
        type: String,
        enum: validRoles,
        required: [true, 'role required']
    },
    active: {
        type: Boolean,
        default: true,
    },
});
const Usuario = mongoose.model("Usuario", UsuarioSchema);
exports.default = Usuario;
//# sourceMappingURL=usuario.model.js.map