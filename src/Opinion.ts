import { Tienda } from "./Tienda";
import { Usuario } from "./Usuario";
import { RespuestaOpinion } from "./RespuestaOpinion";

export class Opinion{
	tienda: Tienda;
	fecha: Date;
	usuario: Usuario;
	titulo: string;
	valoracionNumerica: number;
	descripcion: string;
	respuesta: RespuestaOpinion;

	constructor (tienda: Tienda, fecha: Date, usuario: Usuario, titulo: string, valoracionNumerica: number, descripcion: string){
		this.tienda = tienda;
		this.fecha = fecha;
		this.usuario = usuario;
		this.titulo = titulo;
		this.setValoracionNumerica(valoracionNumerica);
		this.descripcion = descripcion;
	}
	
	setValoracionNumerica(valoracionNumerica: number){
		if (valoracionNumerica % 1 != 0 || valoracionNumerica < 1 || valoracionNumerica > 5){
			throw Error('Valoracion numerica incorrecta');
		}
		
		this.valoracionNumerica = valoracionNumerica;
	}
	
	setRespuesta(respuesta: RespuestaOpinion){
		this.respuesta = respuesta;
	}
	
	getTienda(){
		return this.tienda;
	}
	
	getFecha(){
		return this.fecha;
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
