import { Request, Response } from 'express';
import * as _ from 'lodash';
import Corral from '../models/corral.model';

export class CorralController {
    crearCorral = (req: Request, res: Response) =>  {
        const nuevaCorral = new Corral({
            corral: req.body.corral
        });

        nuevaCorral.save()
        .then(corralCreada => {
            res.status(201).json({
                ok: true,
                corral: corralCreada,
                message: 'Corral creada'
            });
        })
        .catch(error =>{
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Corral no creada'
            });
        });
    }

    obtenerCorrals = (req: Request, res: Response) => {
        Corral.find()
        .then(corrals => {
            res.status(200).json({
                ok: true,
                corrals: corrals
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: error.message
            });
        });
    }

    actualizarCorral  = (req: Request, res: Response) => {
        Corral.findByIdAndUpdate(req.params.id, {
            corral: req.body.corral
        })
        .then(corralActualizada => {
            res.status(200).json(
                {
                    ok: true,
                    corral: corralActualizada,
                    message: 'Corral actualizada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Corral no actualizada'
            });
        });
    }

    eliminarCorral  = (req: Request, res: Response) => {
        Corral.findByIdAndDelete(req.params.id)
        .then(corralEliminada => {
            res.status(200).json(
                {
                    ok: true,                   
                    message: 'Corral eliminada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Corral no eliminada'
            });
        });
    }

    

}