import { Tienda } from "./Tienda";
import { Usuario } from "./Usuario";
import { RespuestaOpinion } from "./RespuestaOpinion";
import { ExcepcionValoracionNumericaIncorrecta } from "../excepciones/ExcepcionValoracionNumericaIncorrecta";

export class Opinion{
	tienda: number;
	id: number;
	fechaCreacion: Date;
	fechaEdicion: Date;
	usuario: string;
	titulo: string;
	valoracionNumerica: number;
	descripcion: string;
	respuesta: RespuestaOpinion;

	constructor (tienda: number, fechaCreacion: Date, usuario: string, titulo: string, valoracionNumerica: number, descripcion: string){
		this.tienda = tienda;
		this.fechaCreacion = fechaCreacion;
		this.usuario = usuario;
		this.titulo = titulo;
		this.setValoracionNumerica(valoracionNumerica);
		this.descripcion = descripcion;
	}
	
	static deserialize(datos): Opinion{
		let op = new Opinion (datos['tienda'], new Date(datos['fechaCreacion']), datos['usuario'], datos['titulo'], datos['valoracionNumerica'], datos['descripcion']);
		op.setId(datos['id']);
		if ( 'respuesta' in datos ){
			if (datos['respuesta'] != null){
				op.setRespuesta(RespuestaOpinion.deserialize(datos['respuesta']));
			}
		}
		if ( 'fechaEdicion' in datos ){
			if (datos['respuesta'] != null){
				op.setFechaEdicion(new Date(datos['fechaEdicion']));
			}
		}
		return op;
	}
	
	getId() : number{
		return this.id;
	}
	
	setId(id: number){
		this.id = id;
	}
	
	setTitulo(t: string){
		this.titulo = t;
	}
	
	setValoracionNumerica(valoracionNumerica: number){
		if (valoracionNumerica % 1 != 0 || valoracionNumerica < 1 || valoracionNumerica > 5){
			throw new ExcepcionValoracionNumericaIncorrecta();
		}
		
		this.valoracionNumerica = valoracionNumerica;
	}
	
	setDescripcion(d: string){
		this.descripcion = d;
	}
	
	setRespuesta(respuesta: RespuestaOpinion){
		this.respuesta = respuesta;
	}
	
	setFechaEdicion(f: Date){
		this.fechaEdicion = f;
	}
	
	getTienda(){
		return this.tienda;
	}
	
	getFechaCreacion(){
		return this.fechaCreacion;
	}
	
	getFechaEdicion(){
		return this.fechaEdicion;
	}
	
	getUsuario(){
		return this.usuario;
	}
	
	getTitulo(){
		return this.titulo;
	}
	
	getValoracionNumerica(){
		return this.valoracionNumerica;
	}
	
	getDescripcion(){
		return this.descripcion;
	}
	
	getRespuesta(){
		return this.respuesta;
	}
	
	tieneRespuesta(){
		return this.respuesta != null;
	}
	
	eliminarRespuesta(){
		this.respuesta = null;
	}
}
