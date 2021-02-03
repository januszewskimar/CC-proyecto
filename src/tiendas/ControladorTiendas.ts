import { Tienda } from '../entidades/Tienda';

export class ControladorTiendas{
	private tiendas: Tienda[] = [];
	
	constructor(){
	
	}
	
	addTienda(t: Tienda){
		let max = 0;
		for (let i = 0 ; i < this.tiendas.length ; i++){
			if (this.tiendas[i].getId() > max){
				max = this.tiendas[i].getId();
			}
		}
		t.setId(max+1);
		this.tiendas.push(t);
	}
}
