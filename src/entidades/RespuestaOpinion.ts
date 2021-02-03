import { Opinion } from "./Opinion";

export class RespuestaOpinion{
	fechaCreacion: Date;
	fechaEdicion: Date;
	contenido: string;

	constructor(fechaCreacion: Date, contenido: string){
		this.fechaCreacion = fechaCreacion;
		this.contenido = contenido;
	}
	
	getFechaCreacion(){
		return this.fechaCreacion;
	}
	
	getFechaEdicion(){
		return this.fechaEdicion;
	}
	
	getContenido(){
		return this.contenido;
	}
	
	setContenido(c: string){
		this.contenido = c;
	}
	
	setFechaEdicion(f: Date){
		this.fechaEdicion = f;
	}
}
