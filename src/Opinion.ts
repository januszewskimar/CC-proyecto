import { Tienda } from "./Tienda";
import { Usuario } from "./Usuario";

export class Opinion{
	tienda: Tienda;
	usuario: Usuario;
	titulo: string;
	valoracionNumerica: number;
	descripcion: string;

	constructor (tienda: Tienda, usuario: Usuario, titulo: string, valoracionNumerica: number, descripcion: string){
		this.tienda = tienda;
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
	
	getTienda(){
		return this.tienda;
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
