import 'mocha';
import  {Tienda} from '../Tienda'; 
import {expect} from 'chai';

describe('Tienda', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(Tienda, 'Cargado');
		})
	})
	
	describe('Número de teléfono', function(){
		it('Lanza una excepción si contiene letras', function(){
			expect(function(){new Tienda('Shop', 'Calle ABC 3, 4A', '+23fa2313', null)}).to.throw('Telefono incorrecto');
		})
		
		it('Lanza una excepción si contiene espacios', function(){
			expect(function(){new Tienda('Shop', 'Calle ABC 3, 4A', '+23231 3', null)}).to.throw('Telefono incorrecto');
		})
		
		it('Lanza una excepción si contiene puntos', function(){
			expect(function(){new Tienda('Shop', 'Calle ABC 3, 4A', '+2323.13', null)}).to.throw('Telefono incorrecto');
		})
	})
	

	describe('Guarda correctamente', function(){
		it('Crea correctamente un usuario con datos correctos', function(){
			let tienda = new Tienda('Shop', 'Calle ABC 3, 4A', '123456789', null);
			
			expect(tienda.getNombre()).to.equal('Shop');
			expect(tienda.getDireccion()).to.equal('Calle ABC 3, 4A');
			expect(tienda.getTelefono()).to.equal('123456789');
			expect(tienda.getAdministrador()).to.equal(null);
		})
	})	
})
