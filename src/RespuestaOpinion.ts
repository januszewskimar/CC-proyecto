import { Opinion } from "./Opinion";

export class RespuestaOpinion{
	opinion: Opinion;
	fecha: Date;
	contenido: string;

	constructor(opinion: Opinion, fecha: Date, contenido: string){
		this.opinion = opinion;
		opinion.setRespuesta(this);
		this.fecha = fecha;
		this.contenido = contenido;
	}
	
	getOpinion(){
		return this.opinion;
	}
	
	getFecha(){
		return this.fecha;
	}
	
	getContenido(){
		return this.contenido;
	}
}
