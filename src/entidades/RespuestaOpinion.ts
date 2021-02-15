import { Opinion } from "./Opinion";

export class RespuestaOpinion{
	fechaCreacion: Date;
	fechaEdicion: Date;
	contenido: string;

	constructor(fechaCreacion: Date, contenido: string){
		this.fechaCreacion = fechaCreacion;
		this.contenido = contenido;
	}
	
	static deserialize(datos){
		var res = new RespuestaOpinion(new Date(datos['fechaCreacion']), datos['contenido']);
		res.setFechaEdicion(new Date(datos['fechaEdicion']));
		return res;
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
