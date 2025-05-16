"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MateriaSchema = new Schema({
    materia: {
        type: String,
        required: [true, 'materia required'],
        unique: true
    }
});
const Materia = mongoose.model("Materia", MateriaSchema);
exports.default = Materia;
//# sourceMappingURL=materia.model.js.map