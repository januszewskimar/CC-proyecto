import 'mocha';
import { expect } from 'chai';
import { Opinion } from '../Opinion';
import { ExcepcionValoracionNumericaIncorrecta } from '../../excepciones/ExcepcionValoracionNumericaIncorrecta';

describe('Opinion', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(Opinion, 'Cargado');
		})
	})
	
	describe('Valoración numérica', function(){
		it('Lanza una excepción si no es un número entero', function(){			
			expect(() => {new Opinion(1, new Date(Date.now()), "juan", 'Buena tienda', 1.5, 'Todo correcto')}).to.throw(ExcepcionValoracionNumericaIncorrecta);
		})
		
		it('Lanza una excepción si es menor que 1', function(){
			expect(() => {new Opinion(2, new Date(Date.now()), "ana", 'Buena tienda', 0, 'Todo correcto')}).to.throw(ExcepcionValoracionNumericaIncorrecta);
		})
		
		it('Lanza una excepción si es mayor que 5', function(){
			expect(() => {new Opinion(3, new Date(Date.now()), "felipe", 'Buena tienda', 6 , 'Todo correcto')}).to.throw(ExcepcionValoracionNumericaIncorrecta);
		})

	})
	

	describe('Guarda correctamente', function(){
		it('Crea correctamente una opinión con datos correctos', function(){
			let fecha = new Date(Date.now());
			let opinion = new Opinion(4, fecha, "juan", 'Buena tienda', 4 , 'Todo correcto');
			
			expect(opinion.getTienda()).to.equal(4);
			expect(opinion.getFechaCreacion()).to.equal(fecha);
			expect(opinion.getUsuario()).to.equal("juan");
			expect(opinion.getTitulo()).to.equal('Buena tienda');
			expect(opinion.getValoracionNumerica()).to.equal(4);
			expect(opinion.getDescripcion()).to.equal('Todo correcto');
		})
	})
	
	describe('Edita un comentario correctamente', function(){
		it('Edita el título de una opinión', function(){
			let fechaCreacion = new Date(Date.now());
			let opinion = new Opinion(5, fechaCreacion, "ana", 'Buena tienda', 4 , 'Todo correcto');
			
			let fechaEdicion = new Date(Date.now());
			opinion.setTitulo('Buena experiencia');
			opinion.setFechaEdicion(fechaEdicion);
			
			expect(opinion.getTienda()).to.equal(5);
			expect(opinion.getFechaCreacion()).to.equal(fechaCreacion);
			expect(opinion.getFechaEdicion()).to.equal(fechaEdicion);
			expect(opinion.getUsuario()).to.equal("ana");
			expect(opinion.getTitulo()).to.equal('Buena experiencia');
			expect(opinion.getValoracionNumerica()).to.equal(4);
			expect(opinion.getDescripcion()).to.equal('Todo correcto');
		})
		
		
		it('Edita la valoración numérica de una opinión', function(){
			let fechaCreacion = new Date(Date.now());
			let opinion = new Opinion(6, fechaCreacion, "felipe", 'Buena tienda', 4 , 'Todo correcto');
			
			let fechaEdicion = new Date(Date.now());
			opinion.setValoracionNumerica(3);
			opinion.setFechaEdicion(fechaEdicion);
			
			expect(opinion.getTienda()).to.equal(6);
			expect(opinion.getFechaCreacion()).to.equal(fechaCreacion);
			expect(opinion.getFechaEdicion()).to.equal(fechaEdicion);
			expect(opinion.getUsuario()).to.equal("felipe");
			expect(opinion.getTitulo()).to.equal('Buena tienda');
			expect(opinion.getValoracionNumerica()).to.equal(3);
			expect(opinion.getDescripcion()).to.equal('Todo correcto');
		})
		
		
		it('Edita la descripción de una opinión', function(){
			let fechaCreacion = new Date(Date.now());
			let opinion = new Opinion(7, fechaCreacion, "juan", 'Buena tienda', 4 , 'Todo correcto');
			
			let fechaEdicion = new Date(Date.now());
			opinion.setDescripcion('Todo bien');
			opinion.setFechaEdicion(fechaEdicion);
			
			expect(opinion.getTienda()).to.equal(7);
			expect(opinion.getFechaCreacion()).to.equal(fechaCreacion);
			expect(opinion.getFechaEdicion()).to.equal(fechaEdicion);
			expect(opinion.getUsuario()).to.equal("juan");
			expect(opinion.getTitulo()).to.equal('Buena tienda');
			expect(opinion.getValoracionNumerica()).to.equal(4);
			expect(opinion.getDescripcion()).to.equal('Todo bien');
		})
	
	})
})
