import { AdministradorTienda } from "./AdministradorTienda";
import { Opinion } from "./Opinion";

export class Tienda{
	private nombreTienda: string;
	private direccion: string;
	private telefono: string;
	private administrador: AdministradorTienda;
	private opiniones: Opinion[]
	
	constructor (nombreTienda: string, direccion: string, telefono: string, administrador: AdministradorTienda){
		this.nombreTienda = nombreTienda;
		this.direccion = direccion;
		this.telefono = telefono;
		this.administrador = administrador;
	}
	
	aniadirOpinion(opinion: Opinion){
		this.opiniones.push(opinion);
	}
	
	getOpiniones() : Opinion[] {
		return this.opiniones;
	}
}
