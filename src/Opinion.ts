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
		this.valoracionNumerica = valoracionNumerica;
		this.descripcion = descripcion;
	}
}
