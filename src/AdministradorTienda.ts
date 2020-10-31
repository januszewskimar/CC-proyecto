import { Tienda } from "./Tienda";

export class AdministradorTienda{
	private nombreUsuario: string;
	private correo: string;
	private nombre: string;
	private apellidos: string;
	private tienda: Tienda;
	
	constructor (nombreUsuario: string, correo: string, nombre: string, apellidos: string){
		this.nombreUsuario = nombreUsuario;
		this.correo = correo;
		this.nombre = nombre;
		this.apellidos = apellidos;
	}
}
