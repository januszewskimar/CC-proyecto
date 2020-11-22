import { Opinion } from './Opinion';
import { Tienda } from './Tienda';
import { ExcepcionNoHayOpiniones } from './ExcepcionNoHayOpiniones';

export class ControladorOpiniones{
	private opiniones: Opinion[] = [];
	
	constructor(){

	}
	
	addOpinion(op: Opinion){
		this.opiniones.push(op);
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
