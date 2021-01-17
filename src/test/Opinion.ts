import 'mocha';
import { expect } from 'chai';
import { Opinion } from '../Opinion'; 
import { AdministradorTienda } from '../AdministradorTienda';
import { Tienda } from '../Tienda';
import { Usuario } from '../Usuario';
import { ExcepcionValoracionNumericaIncorrecta } from '../ExcepcionValoracionNumericaIncorrecta';

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
			
			expect(() => {new Opinion(tienda, new Date(Date.now()), usuario, 'Buena tienda', 1.5, 'Todo correcto')}).to.throw(ExcepcionValoracionNumericaIncorrecta);
		})
		
		it('Lanza una excepción si es menor que 1', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			
			expect(() => {new Opinion(tienda, new Date(Date.now()), usuario, 'Buena tienda', 0, 'Todo correcto')}).to.throw(ExcepcionValoracionNumericaIncorrecta);
		})
		
		it('Lanza una excepción si es mayor que 5', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			
			expect(() => {new Opinion(tienda, new Date(Date.now()), usuario, 'Buena tienda', 6 , 'Todo correcto')}).to.throw(ExcepcionValoracionNumericaIncorrecta);
		})

	})
	

	describe('Guarda correctamente', function(){
		it('Crea correctamente una opinión con datos correctos', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let fecha = new Date(Date.now());
			let opinion = new Opinion(tienda, fecha, usuario, 'Buena tienda', 4 , 'Todo correcto');
			
			expect(opinion.getTienda()).to.equal(tienda);
			expect(opinion.getFechaCreacion()).to.equal(fecha);
			expect(opinion.getUsuario()).to.equal(usuario);
			expect(opinion.getTitulo()).to.equal('Buena tienda');
			expect(opinion.getValoracionNumerica()).to.equal(4);
			expect(opinion.getDescripcion()).to.equal('Todo correcto');
		})
	})
	
	describe('Edita un comentario correctamente', function(){
		it('Edita el título de una opinión', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let fechaCreacion = new Date(Date.now());
			let opinion = new Opinion(tienda, fechaCreacion, usuario, 'Buena tienda', 4 , 'Todo correcto');
			
			let fechaEdicion = new Date(Date.now());
			opinion.setTitulo('Buena experiencia');
			opinion.setFechaEdicion(fechaEdicion);
			
			expect(opinion.getTienda()).to.equal(tienda);
			expect(opinion.getFechaCreacion()).to.equal(fechaCreacion);
			expect(opinion.getFechaEdicion()).to.equal(fechaEdicion);
			expect(opinion.getUsuario()).to.equal(usuario);
			expect(opinion.getTitulo()).to.equal('Buena experiencia');
			expect(opinion.getValoracionNumerica()).to.equal(4);
			expect(opinion.getDescripcion()).to.equal('Todo correcto');
		})
		
		
		it('Edita la valoración numérica de una opinión', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let fechaCreacion = new Date(Date.now());
			let opinion = new Opinion(tienda, fechaCreacion, usuario, 'Buena tienda', 4 , 'Todo correcto');
			
			let fechaEdicion = new Date(Date.now());
			opinion.setValoracionNumerica(3);
			opinion.setFechaEdicion(fechaEdicion);
			
			expect(opinion.getTienda()).to.equal(tienda);
			expect(opinion.getFechaCreacion()).to.equal(fechaCreacion);
			expect(opinion.getFechaEdicion()).to.equal(fechaEdicion);
			expect(opinion.getUsuario()).to.equal(usuario);
			expect(opinion.getTitulo()).to.equal('Buena tienda');
			expect(opinion.getValoracionNumerica()).to.equal(3);
			expect(opinion.getDescripcion()).to.equal('Todo correcto');
		})
		
		
		it('Edita la descripción de una opinión', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let fechaCreacion = new Date(Date.now());
			let opinion = new Opinion(tienda, fechaCreacion, usuario, 'Buena tienda', 4 , 'Todo correcto');
			
			let fechaEdicion = new Date(Date.now());
			opinion.setDescripcion('Todo bien');
			opinion.setFechaEdicion(fechaEdicion);
			
			expect(opinion.getTienda()).to.equal(tienda);
			expect(opinion.getFechaCreacion()).to.equal(fechaCreacion);
			expect(opinion.getFechaEdicion()).to.equal(fechaEdicion);
			expect(opinion.getUsuario()).to.equal(usuario);
			expect(opinion.getTitulo()).to.equal('Buena tienda');
			expect(opinion.getValoracionNumerica()).to.equal(4);
			expect(opinion.getDescripcion()).to.equal('Todo bien');
		})
	
	})
})
