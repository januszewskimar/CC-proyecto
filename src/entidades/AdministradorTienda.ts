import { Tienda } from "./Tienda";
import { ValidacionDatos } from "../ValidacionDatos";
import { ExcepcionNombreUsuarioIncorrecto } from "../excepciones/ExcepcionNombreUsuarioIncorrecto";
import { ExcepcionCorreoIncorrecto } from "../excepciones/ExcepcionCorreoIncorrecto";

export class AdministradorTienda{
	private nombreUsuario: string;
	private correo: string;
	private nombre: string;
	private apellidos: string;
	private tienda: Tienda;
	
	constructor (nombreUsuario: string, correo: string, nombre: string, apellidos: string){
		this.setNombreUsuario(nombreUsuario);
		this.setCorreo(correo);
		this.nombre = nombre;
		this.apellidos = apellidos;
	}
	
	setCorreo (correo: string){
		if (!ValidacionDatos.esCorrectoCorreo(correo)){
			throw new ExcepcionCorreoIncorrecto();
		}
		
		this.correo = correo;
	}
	
	setNombreUsuario (nombreUsuario: string){
		if (!ValidacionDatos.esCorrectoNombreUsuario(nombreUsuario)){
			throw new ExcepcionNombreUsuarioIncorrecto();
		}

		this.nombreUsuario = nombreUsuario;
	}
	
	setTienda(tienda: Tienda){
		this.tienda = tienda;
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
