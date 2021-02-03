import 'mocha';
import { ControladorTiendas } from '../ControladorTiendas';
import { Tienda } from '../../entidades/Tienda';
import { ExcepcionTelefonoIncorrecto } from '../../excepciones/ExcepcionTelefonoIncorrecto';
import { expect } from 'chai';

describe('ControladorTiendas', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(ControladorTiendas, 'Cargado');
		})
	})
	
	describe('Guardar tiendas', function(){
		it ('No lanza excepciones si se añade una tienda con los datos correctos', function(){
			let controlador = new ControladorTiendas();
			
			let t1 = new Tienda('Shop 1', 'Calle ABC 3, 4A', '123456789', "ana");
			controlador.addTienda(t1);
		})
	})

})