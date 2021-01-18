import { Opinion } from './Opinion';
import { AdministradorTienda } from './AdministradorTienda';
import { Tienda } from './Tienda';
import { Usuario } from './Usuario';
import { ExcepcionNoHayOpiniones } from './ExcepcionNoHayOpiniones';

export class ControladorOpiniones{
	private opiniones: Opinion[] = [];
	
	constructor(){
	
	}
	
	addOpinion(op: Opinion){
		var id = -1;
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda().getNombre() == op.getTienda().getNombre()){
				if (this.opiniones[i].getId() > id){
					id = this.opiniones[i].getId();
				}
			}
		}
		op.setId(id + 1);
		this.opiniones.push(op);
	}
	
	publicarOpinion(nombreUsuario, tienda, titulo, valoracionNumerica, descripcion){
		var at: AdministradorTienda = new AdministradorTienda ("at1", "at1@tienda1.es", "Juan", "Delgado Sánchez");
		var t: Tienda = new Tienda (tienda, "Calle 123", "123456789", at);
		var u: Usuario = new Usuario (nombreUsuario, "abc@mail.es", "Marcos", "González Pérez");
		
		var o: Opinion = new Opinion(t, new Date(Date.now()), u, titulo, valoracionNumerica, descripcion);
		
		this.addOpinion(o);
	}
	
	getOpinionesNombreTienda(n: String) : Opinion[]{
		let resultado: Opinion[] = [];
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda().getNombre() == n){
				resultado.push(this.opiniones[i]);
			}
		}
		return resultado;
	}
	
	getOpiniones(t: Tienda) : Opinion[]{
		let resultado: Opinion[] = [];
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda() == t){
				resultado.push(this.opiniones[i]);
			}
		}
		return resultado;
	}
	
	getValoracionMediaTienda(t: string) : number{
		let num = 0;
		let suma = 0;
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda().getNombre() == t){
				num++;
				suma += this.opiniones[i].getValoracionNumerica();
			}
		}
		
		if (num == 0){
			throw new ExcepcionNoHayOpiniones();
		}
		else{
			return suma / num;
		}
	}
	
	eliminarOpinion(tienda: string, id: number) : boolean{
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda().getNombre() == tienda) && (this.opiniones[i].getId() == id) ){
				this.opiniones.splice(i, 1);
				return true;
			}
		}
		return false;
	}
}
