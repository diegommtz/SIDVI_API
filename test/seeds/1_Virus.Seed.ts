import Knex from 'knex';
import * as path from 'path';
import * as fs from 'fs';

import { IVirus, _Virus } from '../../source/models';
import { Defaults, ContentTypeEnum } from '../../source/api';

export const seed = async (knex: Knex) => {
	await knex('Virus').insert([
		{ idVirus:1, clave: 'covid19', nombre: 'CoronaVirus', mimetypeIcono: ContentTypeEnum.JPG, archivoIcono: fs.readFileSync(path.resolve(__dirname, '..', 'files', 'perfilOmar.jpg')), fkTestNodo: 1, estatus: _Virus.Estatus.HABILITADO } as IVirus,
		{ idVirus:2, clave: 'h1n1', nombre: 'H1N1', mimetypeIcono: ContentTypeEnum.JPG, archivoIcono: fs.readFileSync(path.resolve(__dirname, '..', 'files', 'perfilOmar.jpg')), fkTestNodo: null, estatus: _Virus.Estatus.HABILITADO } as IVirus,
		{ idVirus:3, clave: 'dengue', nombre: 'Dengue', mimetypeIcono: ContentTypeEnum.JPG, archivoIcono: fs.readFileSync(path.resolve(__dirname, '..', 'files', 'perfilOmar.jpg')), fkTestNodo: null, estatus: _Virus.Estatus.HABILITADO } as IVirus,
    ]);
	return knex;
};
