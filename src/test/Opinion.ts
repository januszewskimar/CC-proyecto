import 'mocha';
import  {Opinion} from '../Opinion'; 
import {expect} from 'chai';

describe('Opinion', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(Opinion, 'Cargado');
		})
	})
	
	describe('Valoración numérica', function(){
		it('Lanza una excepción si no es un número entero', function(){
			expect(function(){new Opinion(null, null, 'Buena tienda', 1.5, 'Todo correcto')}).to.throw('Valoracion numerica incorrecta');
		})
		
		it('Lanza una excepción si es menor que 1', function(){
			expect(function(){new Opinion(null, null, 'Buena tienda', 0, 'Todo correcto')}).to.throw('Valoracion numerica incorrecta');
		})
		
		it('Lanza una excepción si es mayor que 5', function(){
			expect(function(){new Opinion(null, null, 'Buena tienda', 6 , 'Todo correcto')}).to.throw('Valoracion numerica incorrecta');
		})
		
		
		it('No lanza una excepción si es correcta', function(){
			new Opinion(null, null, 'Buena tienda', 4 , 'Todo correcto');
		})
	})
	

	describe('Guarda correctamente', function(){
		it('Crea correctamente un usuario con datos correctos', function(){
			let opinion = new Opinion(null, null, 'Buena tienda', 4 , 'Todo correcto');
			
			expect(opinion.getTienda()).to.equal(null);
			expect(opinion.getUsuario()).to.equal(null);
			expect(opinion.getTitulo()).to.equal('Buena tienda');
			expect(opinion.getValoracionNumerica()).to.equal(4);
			expect(opinion.getDescripcion()).to.equal('Todo correcto');
		})
	})	
})
