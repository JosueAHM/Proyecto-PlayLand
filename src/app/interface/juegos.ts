export interface Juegos {
    id: number;
    src: string;
    nombre: string;
    descripcion: string;
    precio: number;
    descuento: string;
}
export interface Colecciones {
    id: number;
    src: string;
    nombre: string;
    descripcion: string;
    precio: number;
}

export interface Requisitos {
    sistema: string;
    procesador: string;
    memoria: string;
    graficos: string;
    directx: string;
    almacenamiento: string;
}

export interface JuegosProximosLanzamientos {
    id: number;
    src: string;
    nombre: string;
    descripcion: string;
    precio: number;
    fecha:string;
  }
  
  export interface JuegosDisponibles {
    id: number;
    src: string;
    nombre: string;
    descripcion: string;
    precio: number;
  }
  
  export interface JuegosUltimosLanzamientos {
    id: number;
    src: string;
    nombre: string;
    descripcion: string;
    precio: number;
    fecha:string;
  }
  
  
  