import { AdministradorTienda } from '../entidades/AdministradorTienda';
import { ExcepcionUsuarioYaExiste } from '../excepciones/ExcepcionUsuarioYaExiste';

export class ControladorAdministradoresTiendas{
	private administradores: AdministradorTienda[] = [];
	
	constructor(){
	
	}
	
	addAdministrador(at: AdministradorTienda){
		for (let i = 0 ; i < this.administradores.length ; i++){
			if (at.getNombreUsuario() === this.administradores[i].getNombreUsuario()){
				throw new ExcepcionUsuarioYaExiste();
			}
		}
		this.administradores.push(at);
	}
}
