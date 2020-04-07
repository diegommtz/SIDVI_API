import { RelationMappings, Model } from 'objection';

import { BaseModel } from '../models';
import { fileToBase64 } from '../tools/Utils';
import { ContentTypeEnum, Defaults } from '../api';
import { Log } from '../tools';
import { text } from 'express';
import { TestNodo} from './TestNodo';


export namespace _TestOpcion {
    export let archivoContentType: ContentTypeEnum[] = [ContentTypeEnum.PDF,ContentTypeEnum.JPG,ContentTypeEnum.PNG,ContentTypeEnum.MP4];
    export let archivoFileSize: number = 128 * 1024 * 1024;
    
}

export interface ITestOpcion {
    idTestOpcion?: number;
    fkTestNodo?: number;
    fkTestNodoSig?: number;
    dave?: string;
    texto?: string;
    descripcion?: string;
    mimetype?: string;
    archivo?: ArrayBuffer | string;
}

export class TestOpcion extends BaseModel implements ITestOpcion {
    // Objection
    static tableName = 'TestOpcion';
    static idColumn = 'idTestOpcion';
    // Objection Modifiers
    static columnList = ['idTestOpcion'];

    // Columns
    idTestOpcion?: number;
    fkTestNodo?: number;
    fkTestNodoSig?: number;
    dave?: string;
    texto?: string;
    descripcion?: string;
    mimetype?: string;
    archivo?: ArrayBuffer | string;

    //Relations: BelongsToOne
    testNodo?: TestNodo;
    testNodoSig?: TestNodo;
    // Relations: HasMany

    // Constructor
    constructor(testOpcion?: any){
        super();
        if(testOpcion!==undefined){
            this.idTestOpcion = testOpcion.idTestOpcion;
            this.fkTestNodo = testOpcion.fkTestNodo;
            this.fkTestNodoSig = testOpcion.fkTestNodoSig;
            this.dave = testOpcion.dave;
            this.texto = testOpcion.texto;
            this.descripcion = testOpcion.descripcion;
            this.mimetype = testOpcion.mimetype;
            this.archivo = testOpcion.archivo;
        }
    }
    
    // Respond Object
    toJSON() {
        return this;
    }

    // Objection: Modifiers
    static get modifiers() {
        return {   
            defaultSelect(builder) {
                builder.select(...TestOpcion.columnList);
            }
        };
    }

    // Objection: Relations
    static relationMappings: RelationMappings = {
        //------------------------------------- HasManyRelation

        //------------------------------------- HasOneRelation
        //------------------------------------- BelongsToOneRelation  
        TestNodo: {
            relation: Model.BelongsToOneRelation,
            modelClass: 'TestNodo',
            join: { from: 'TestOpcion.fkTestNodo', to: 'TestNodo.idTestNodo' }
        }

        //------------------------------------- HasOneThroughRelation
    };

}
