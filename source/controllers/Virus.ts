import { Handler } from '../types';
import { Response } from '../responses';
import { VirusServicio } from '../services';
import { Virus, _Virus } from '../models';
import { Defaults, OrderModeEnum } from '../api';
import { Log } from '../tools';

export const listarVirus: Handler = async (req, res, next) => {
    const clave: string = req.swagger.params['clave'].value;
    const nombre: string = req.swagger.params['nombre'].value;
    const fkTestNodo: number = req.swagger.params['fkTestNodo'].value;
    const estatus: _Virus.Estatus = req.swagger.params['estatus'].value;
    const ordenarModo: OrderModeEnum = req.swagger.params['ordenarModo'].value || Defaults.ordenarModo;
    const ordenarPor: string = req.swagger.params['ordenarPor'].value || Virus.idColumn;    
    try{
        let response = await VirusServicio.listarVirus(req, clave, nombre, fkTestNodo, estatus, ordenarPor, ordenarModo);
        res.respond(response);
    }catch(error){
        next(error);
    }
}

export const crearVirus: Handler = async (req, res, next) => {
    const virus: Virus = req.swagger.params['virus'].value;
    try{
        let response = await VirusServicio.crearVirus(req, virus);
        res.respond(response);
    }catch(error){
        next(error);
    }
}

export const obtenerVirus: Handler = async (req, res, next) => {
    const idVirus: number = req.swagger.params['idVirus'].value;
    try{
        let response = await VirusServicio.obtenerVirus(req, idVirus);
        res.respond(response);
    }catch(error){
        next(error);
    }
}


export const actualizarVirus: Handler = async (req, res, next) => {
    const idVirus: number = req.swagger.params['idVirus'].value;
    const virus: Virus = req.swagger.params['virus'].value;
    try{
        let response = await VirusServicio.actualizarVirus(req, idVirus, virus);
        res.respond(response);
    }catch(error){
        next(error);
    }
}

export const eliminarVirus: Handler = async (req, res, next) => {
    const idVirus: number = req.swagger.params['idVirus'].value;
    try{
        let response = await VirusServicio.eliminarVirus(req, idVirus);
        res.respond(response);
    }catch(error){
        next(error);
    }
}

export const descargarVirusIcono: Handler = async (req, res, next) => {
    const idVirus: number = req.swagger.params['idVirus'].value;
    try{
        let response = await VirusServicio.descargarVirusIcono(req, idVirus);
        res.respond(response);
    }catch(error){
        next(error);
    }
}

export const cargarVirusIcono: Handler = async (req, res, next) => {
    const idVirus: number = req.swagger.params['idVirus'].value;
    const icono: any = req.swagger.params['icono'].value;
    try{
        let response = await VirusServicio.cargarVirusIcono(req, idVirus, icono);
        res.respond(response);
    }catch(error){
        next(error);
    }
}