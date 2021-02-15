import { Collection } from 'mongodb';
import { Tienda } from '../entidades/Tienda';


export class ControladorTiendas{
	private tiendas: Tienda[] = [];
	private coleccion: Collection;
	
	constructor(){
	
	}
	
	setColeccion(coleccion: Collection) : void{
		this.coleccion = coleccion;
	}
	
	async addTienda(t: Tienda): Promise<Tienda> {
		if (this.coleccion == null){
			this.addTiendaLocal(t);
		}
		else{
			var res = await this.coleccion.find({}).sort({"id": -1 }).limit(1).toArray();
			var id;
			if (res.length == 0){
				id = 0;
			}
			else{
				id = res[0].id + 1;
			}
			t.setId(id);
			await this.coleccion.insertOne(t);
		}
		return t;
	}
	
	addTiendaLocal(t: Tienda): Tienda {
		let max = 0;
		for (let i = 0 ; i < this.tiendas.length ; i++){
			if (this.tiendas[i].getId() > max){
				max = this.tiendas[i].getId();
			}
		}
		t.setId(max+1);
		this.tiendas.push(t);
		return t;
	}
}
