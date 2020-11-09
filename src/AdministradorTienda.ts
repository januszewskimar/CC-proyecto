import { Tienda } from "./Tienda";
import { ValidacionDatos } from "./ValidacionDatos";

export class AdministradorTienda{
	private nombreUsuario: string;
	private correo: string;
	private nombre: string;
	private apellidos: string;
	private tienda: Tienda;
	
	constructor (nombreUsuario: string, correo: string, nombre: string, apellidos: string, tienda: Tienda){
		this.setNombreUsuario(nombreUsuario);
		this.setCorreo(correo);
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.tienda = tienda;
	}
	
	setCorreo (correo: string){
		if (!ValidacionDatos.esCorrectoCorreo(correo)){
			throw Error('Correo incorrecto');
		}
		
		this.correo = correo;
	}
	
	setNombreUsuario (nombreUsuario: string){
		if (!ValidacionDatos.esCorrectoNombreUsuario(nombreUsuario)){
			throw Error("Nombre de usuario incorrecto");
		}

		this.nombreUsuario = nombreUsuario;
	}
	
	getNombreUsuario(){
		return this.nombreUsuario;
	}
	
	getCorreo(){
		return this.correo;
	}
	
	getNombre(){
		return this.nombre;
	}
	
	getApellidos(){
		return this.apellidos;
	}
	
	getTienda(){
		return this.tienda;
	}
}
