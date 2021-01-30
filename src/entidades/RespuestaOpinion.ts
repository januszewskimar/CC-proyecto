import { Opinion } from "./Opinion";

export class RespuestaOpinion{
	opinion: Opinion;
	fechaCreacion: Date;
	fechaEdicion: Date;
	contenido: string;

	constructor(opinion: Opinion, fechaCreacion: Date, contenido: string){
		this.opinion = opinion;
		opinion.setRespuesta(this);
		this.fechaCreacion = fechaCreacion;
		this.contenido = contenido;
	}
	
	getOpinion(){
		return this.opinion;
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
