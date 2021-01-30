import { ValidacionDatos } from '../ValidacionDatos';
import { ExcepcionCorreoIncorrecto } from '../excepciones/ExcepcionCorreoIncorrecto';
import { ExcepcionNombreUsuarioIncorrecto } from '../excepciones/ExcepcionNombreUsuarioIncorrecto';

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
			throw new ExcepcionCorreoIncorrecto();
		}
		
		this.correo = correo;
	}
	
	setNombreUsuario (nom: string){
		if (!ValidacionDatos.esCorrectoNombreUsuario(nom)){
			throw new ExcepcionNombreUsuarioIncorrecto();
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
