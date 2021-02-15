import { Usuario } from '../entidades/Usuario';
import { ExcepcionUsuarioYaExiste } from '../excepciones/ExcepcionUsuarioYaExiste';
import { Collection } from 'mongodb';


export class ControladorUsuarios{
	private usuarios: Usuario[] = [];
	private coleccion: Collection;
	
	constructor(){
	
	}
	
	setColeccion(coleccion: Collection){
		this.coleccion = coleccion;
	}
	
	async addUsuario(us: Usuario) : Promise<void> {
		if (this.coleccion == null){
			this.addUsuarioLocal(us);
		}
		else{
			var res = await this.coleccion.findOne( { "nombreUsuario" : us.getNombreUsuario() });
			if (res){
				throw new ExcepcionUsuarioYaExiste();
			}
			else{
				await this.coleccion.insertOne(us);
			}
		}
	}
	
	addUsuarioLocal(us: Usuario) : void {
		for (let i = 0 ; i < this.usuarios.length ; i++){
			if (us.getNombreUsuario() === this.usuarios[i].getNombreUsuario()){
				throw new ExcepcionUsuarioYaExiste();
			}
		}
		this.usuarios.push(us);
	}
}
