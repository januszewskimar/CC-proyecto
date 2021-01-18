import { Tienda } from "./Tienda";
import { Usuario } from "./Usuario";
import { RespuestaOpinion } from "./RespuestaOpinion";
import { ExcepcionValoracionNumericaIncorrecta } from "./ExcepcionValoracionNumericaIncorrecta";

export class Opinion{
	tienda: Tienda;
	id: number;
	fechaCreacion: Date;
	fechaEdicion: Date;
	usuario: Usuario;
	titulo: string;
	valoracionNumerica: number;
	descripcion: string;
	respuesta: RespuestaOpinion;

	constructor (tienda: Tienda, fechaCreacion: Date, usuario: Usuario, titulo: string, valoracionNumerica: number, descripcion: string){
		this.tienda = tienda;
		this.fechaCreacion = fechaCreacion;
		this.usuario = usuario;
		this.titulo = titulo;
		this.setValoracionNumerica(valoracionNumerica);
		this.descripcion = descripcion;
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
}
