import { AdministradorTienda } from "./AdministradorTienda";
import { Opinion } from "./Opinion";

export class Tienda{
	nombreTienda: string;
	direccion: string;
	telefono: string;
	administrador: AdministradorTienda;
	opiniones: Opinion[]
	
	constructor (nombreTienda: string, direccion: string, telefono: string, administrador: AdministradorTienda){
		this.nombreTienda = nombreTienda;
		this.direccion = direccion;
		this.telefono = telefono;
		this.administrador = administrador;
	}
	
	aniadirOpinion(opinion: Opinion){
		this.opiniones.push(opinion);
	}
}
