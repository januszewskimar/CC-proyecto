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
		this.opiniones.push(op);
	}
	
	publicarOpinion(nombreUsuario, tienda, titulo, valoracionNumerica, descripcion){
		var at: AdministradorTienda = new AdministradorTienda ("at1", "at1@tienda1.es", "Juan", "Delgado Sánchez");
		var t: Tienda = new Tienda (tienda, "Calle 123", "123456789", at);
		var u: Usuario = new Usuario (nombreUsuario, "abc@mail.es", "Marcos", "González Pérez");
		
		var o: Opinion = new Opinion(t, new Date(Date.now()), u, titulo, valoracionNumerica, descripcion);
		
		this.addOpinion(o);
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
	
	getValoracionMediaTienda(t: Tienda) : number{
		let num = 0;
		let suma = 0;
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda() == t){
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
}
