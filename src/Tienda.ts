import { AdministradorTienda } from "./AdministradorTienda";
import { Opinion } from "./Opinion";
import { ValidacionDatos } from "./ValidacionDatos";

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
		if (!ValidacionDatos.esCorrectoTelefono(telefono)){
			throw Error('Telefono incorrecto');
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
