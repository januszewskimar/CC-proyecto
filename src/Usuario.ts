import { ValidacionDatos } from './ValidacionDatos';

export class Usuario{
	private nombreUsuario: string;
	private correo: string;
	private nombre: string;
	private apellidos: string;
	
	constructor (nombreUsuario: string, correo: string, nombre: string, apellidos: string){
		this.setNombreUsuario(nombreUsuario);
		this.setCorreo(correo);
		this.nombre = nombre;
		this.apellidos = apellidos;
	}
	
	setCorreo (correo: string){
		if (!ValidacionDatos.esCorrectoCorreo(correo)){
			throw Error("Correo incorrecto");
		}
		
		this.correo = correo;
	}
	
	setNombreUsuario (nom: string){
		if (!ValidacionDatos.esCorrectoNombreUsuario(nom)){
			throw Error("Nombre de usuario incorrecto");
		}
		
		this.nombreUsuario = nom;
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
	
}
