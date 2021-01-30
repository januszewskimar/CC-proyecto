import { Usuario } from '../entidades/Usuario';
import { ExcepcionUsuarioYaExiste } from '../excepciones/ExcepcionUsuarioYaExiste';

export class ControladorUsuarios{
	private usuarios: Usuario[] = [];
	
	constructor(){
	
	}
	
	addUsuario(us: Usuario){
		for (let i = 0 ; i < this.usuarios.length ; i++){
			if (us.getNombreUsuario() === this.usuarios[i].getNombreUsuario()){
				throw new ExcepcionUsuarioYaExiste();
			}
		}
		this.usuarios.push(us);
	}
}
