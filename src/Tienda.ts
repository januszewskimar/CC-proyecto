import { AdministradorTienda } from "./AdministradorTienda";
import { Opinion } from "./Opinion";

export class Tienda{
	private nombre: string;
	private direccion: string;
	private telefono: string;
	private administrador: AdministradorTienda;
	private opiniones: Opinion[]
	
	constructor (nombre: string, direccion: string, telefono: string, administrador: AdministradorTienda){
		this.nombre = nombre;
		this.direccion = direccion;
		this.setTelefono(telefono);
		this.administrador = administrador;
	}
	
	aniadirOpinion(opinion: Opinion){
		this.opiniones.push(opinion);
	}
	
	getOpiniones() : Opinion[] {
		return this.opiniones;
	}
	
	setTelefono(telefono: string) {
		let i = 0;
		let tlf;
		if (telefono[0] == '+'){
			i = 1;
			if (telefono.length < 2){
				throw Error("Telefono incorrecto");
			}
			tlf = telefono.substring(1);
		}
		else{
			i = 0;
			if (telefono.length < 1){
				throw Error("Telefono incorrecto");
			}
			tlf = telefono;
		}
		
		let num = Number(tlf);
		
		if (num == NaN){
			throw Error("Telefono incorrecto");
		}
		
		if (num % 1 != 0){
			throw Error("Telefono incorrecto");
		}
		
		this.telefono = telefono;
	}
	
	getNombre(){
		return this.nombre;
	}
	
	getDireccion(){
		return this.direccion;
	}
	
	getTelefono(){
		return this.telefono;
	}
	
	getAdministrador(){
		return this.administrador;
	}
}
