import { AdministradorTienda } from "./AdministradorTienda";
import { Opinion } from "./Opinion";
import { ValidacionDatos } from "../ValidacionDatos";
import { ExcepcionTelefonoIncorrecto } from "../excepciones/ExcepcionTelefonoIncorrecto";

export class Tienda{
	private id: number;
	private nombre: string;
	private direccion: string;
	private telefono: string;
	private administrador: string;
	
	constructor (nombre: string, direccion: string, telefono: string, administrador: string){
		this.nombre = nombre;
		this.direccion = direccion;
		this.setTelefono(telefono);
		this.administrador = administrador;
	}
	
	getId(){
		return this.id;
	}
	
	setId(id: number){
		this.id = id;
	}
	
	setTelefono(telefono: string) {
		if (!ValidacionDatos.esCorrectoTelefono(telefono)){
			throw new ExcepcionTelefonoIncorrecto();
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
