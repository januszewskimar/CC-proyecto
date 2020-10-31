import { AdministradorTienda } from "./AdministradorTienda";

export class Tienda{
	nombreTienda: string;
	direccion: string;
	telefono: string;
	administrador: AdministradorTienda;
	
	constructor (nombreTienda: string, direccion: string, telefono: string, administrador: AdministradorTienda){
		this.nombreTienda = nombreTienda;
		this.direccion = direccion;
		this.telefono = telefono;
		this.administrador = administrador;
	}
}
