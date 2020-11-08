import 'mocha';
import  {Usuario} from '../Usuario'; 
import {expect} from 'chai';

describe('Usuario', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(Usuario, 'Cargado');
		})
	})
	
	describe('Correo electrónico', function(){
		it('Lanza una excepción si no contiene arrobas', function(){
			expect(function(){new Usuario('nombreUsuario', 'correo', 'Ana', 'García')}).to.throw('Correo incorrecto');
		})
		
		it('Lanza una excepción si contiene más de una arroba', function(){
			expect(function(){new Usuario('nombreUsuario', 'co@r@reo', 'Ana', 'García')}).to.throw('Correo incorrecto');
			expect(function(){new Usuario('nombreUsuario', 'co@r@r@eo', 'Ana', 'García')}).to.throw('Correo incorrecto');
		})
		
		it('Lanza una excepción si hay una arroba al principio', function(){
			expect(function(){new Usuario('nombreUsuario', '@correo', 'Ana', 'García')}).to.throw('Correo incorrecto');
		})
		
		it('Lanza una excepción si hay una arroba al final', function(){
			expect(function(){new Usuario('nombreUsuario', 'correo@', 'Ana', 'García')}).to.throw('Correo incorrecto');
		})
		
		it('Lanza una excepción si contiene un espacio', function(){
			expect(function(){new Usuario('nombreUsuario', 'cor @reo', 'Ana', 'García')}).to.throw('Correo incorrecto');
		})
		
		it('No lanza una excepción para un correo correcto', function(){
			new Usuario('nombreUsuario', 'usuario@correo.es', 'Ana', 'García');
		})
	})
	
	describe('Nombre de usuario', function(){
		it('Lanza una excepción si contiene un espacio', function(){
			expect(function(){new Usuario('nombre usuario', 'usuario@correo.es', 'Ana', 'García')}).to.throw('Nombre de usuario incorrecto');
		})
		
		it('Lanza una excepción si está vacío', function(){
			expect(function(){new Usuario('', 'usuario@correo.es', 'Ana', 'García')}).to.throw('Nombre de usuario incorrecto');
		})
		
		it('No lanza una excepción para un correo correcto', function(){
			new Usuario('nombreUsuario', 'usuario@correo.es', 'Ana', 'García');
		})
	})
	
	describe('Guarda correctamente', function(){
		it('Crea correctamente un usuario con datos correctos', function(){
			let usuario = new Usuario('nombreUsuario', 'usuario@correo.es', 'Ana', 'García');
			
			expect(usuario.getNombreUsuario()).to.equal('nombreUsuario');
			expect(usuario.getCorreo()).to.equal('usuario@correo.es');
			expect(usuario.getNombre()).to.equal('Ana');
			expect(usuario.getApellidos()).to.equal('García');
		})
	})
	
	
})
