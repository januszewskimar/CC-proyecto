import 'mocha';
import {expect} from 'chai';
import  {Opinion} from '../Opinion'; 
import  {AdministradorTienda} from '../AdministradorTienda';
import  {Tienda} from '../Tienda';
import  {Usuario} from '../Usuario'; 

describe('Opinion', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(Opinion, 'Cargado');
		})
	})
	
	describe('Valoración numérica', function(){
		it('Lanza una excepción si no es un número entero', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			
			expect(function(){new Opinion(tienda, usuario, 'Buena tienda', 1.5, 'Todo correcto')}).to.throw('Valoracion numerica incorrecta');
		})
		
		it('Lanza una excepción si es menor que 1', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			
			expect(function(){new Opinion(tienda, usuario, 'Buena tienda', 0, 'Todo correcto')}).to.throw('Valoracion numerica incorrecta');
		})
		
		it('Lanza una excepción si es mayor que 5', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			
			expect(function(){new Opinion(tienda, usuario, 'Buena tienda', 6 , 'Todo correcto')}).to.throw('Valoracion numerica incorrecta');
		})

	})
	

	describe('Guarda correctamente', function(){
		it('Crea correctamente un usuario con datos correctos', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let opinion = new Opinion(tienda, usuario, 'Buena tienda', 4 , 'Todo correcto');
			
			expect(opinion.getTienda()).to.equal(tienda);
			expect(opinion.getUsuario()).to.equal(usuario);
			expect(opinion.getTitulo()).to.equal('Buena tienda');
			expect(opinion.getValoracionNumerica()).to.equal(4);
			expect(opinion.getDescripcion()).to.equal('Todo correcto');
		})
	})	
})
