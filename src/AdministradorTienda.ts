import { Tienda } from "./Tienda";

export class AdministradorTienda{
	nombreUsuario: string;
	correo: string;
	nombre: string;
	apellidos: string;
	tienda: Tienda;
	
	constructor (nombreUsuario: string, correo: string, nombre: string, apellidos: string){
		this.nombreUsuario = nombreUsuario;
		this.correo = correo;
		this.nombre = nombre;
		this.apellidos = apellidos;
	}
}
