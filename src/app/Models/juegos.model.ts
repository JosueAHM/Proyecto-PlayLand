import { RequisitosModel } from "./requisitos.model";

export interface JuegosModel {
    id?              : number,
    requisitos?      : RequisitosModel,
    src?             : string,
    nombre?          : string,
    descripcion?     : string,
    precio?          : number,
    fechaLazamiento? : string,
    descuento?       : number,
    estado?          : string,
}