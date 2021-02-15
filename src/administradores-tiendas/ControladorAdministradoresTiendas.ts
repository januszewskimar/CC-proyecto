import { AdministradorTienda } from '../entidades/AdministradorTienda';
import { ExcepcionUsuarioYaExiste } from '../excepciones/ExcepcionUsuarioYaExiste';
import { Collection } from 'mongodb';


export class ControladorAdministradoresTiendas{
	private administradores: AdministradorTienda[] = [];
	private coleccion: Collection;
	
	constructor(){

	}
	
	setColeccion(coleccion: Collection){
		this.coleccion = coleccion;
	}
	
	async addAdministrador(at: AdministradorTienda) : Promise<void> {
		if (this.coleccion == null){
			this.addAdministradorLocal(at);
		}
		else{
			var res = await this.coleccion.findOne( { "nombreUsuario" : at.getNombreUsuario() });
			if (res){
				throw new ExcepcionUsuarioYaExiste();
			}
			else{
				await this.coleccion.insertOne(at);
			}
		}
	}
	
	addAdministradorLocal(at: AdministradorTienda) : void {
		for (let i = 0 ; i < this.administradores.length ; i++){
			if (at.getNombreUsuario() === this.administradores[i].getNombreUsuario()){
				throw new ExcepcionUsuarioYaExiste();
			}
		}
		this.administradores.push(at);
	}
}
