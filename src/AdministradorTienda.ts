import { Tienda } from "./Tienda";

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
		if (correo.length < 3){
			throw Error("Correo incorrecto");
		}
		
		let numArrobas: number = 0;
		for (let i:number = 0 ; i < correo.length ; i++){
			if (correo[i] == '@'){
				numArrobas++;
			}
			if (correo[i] == ' '){
				throw Error("Correo incorrecto");
			}
		}
		if (numArrobas != 1 || correo[0] == '@' || correo[correo.length-1] == '@'){
			throw Error("Correo incorrecto");
		}
		
		this.correo = correo;
	}
	
	setNombreUsuario (nombreUsuario: string){
		if (nombreUsuario.length < 1){
			throw Error("Nombre de usuario incorrecto");
		}
		
		for (let i:number = 0 ; i < nombreUsuario.length ; i++){
			if (nombreUsuario[i] == ' '){
				throw Error("Nombre de usuario incorrecto");
			}
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
