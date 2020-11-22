import 'mocha';
import  {Usuario} from '../Usuario'; 
import  {ExcepcionNombreUsuarioIncorrecto} from '../ExcepcionNombreUsuarioIncorrecto'; 
import  {ExcepcionCorreoIncorrecto} from '../ExcepcionCorreoIncorrecto'; 
import {expect} from 'chai';

describe('Usuario', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(Usuario, 'Cargado');
		})
	})
	
	describe('Correo electrónico', function(){
		it('Lanza una excepción si no contiene arrobas', function(){
			expect(() => {new Usuario('nombreUsuario', 'correo', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
		
		it('Lanza una excepción si contiene más de una arroba', function(){
			expect(() => {new Usuario('nombreUsuario', 'co@r@reo', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
			expect(() => {new Usuario('nombreUsuario', 'co@r@r@eo', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
		
		it('Lanza una excepción si hay una arroba al principio', function(){
			expect(() => {new Usuario('nombreUsuario', '@correo', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
		
		it('Lanza una excepción si hay una arroba al final', function(){
			expect(() => {new Usuario('nombreUsuario', 'correo@', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
		
		it('Lanza una excepción si contiene un espacio', function(){
			expect(() => {new Usuario('nombreUsuario', 'cor @reo', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
	})
	
	describe('Nombre de usuario', function(){
		it('Lanza una excepción si contiene un espacio', function(){
			expect(() => {new Usuario('nombre usuario', 'usuario@correo.es', 'Ana', 'García')}).to.throw(ExcepcionNombreUsuarioIncorrecto);
		})
		
		it('Lanza una excepción si está vacío', function(){
			expect(() => {new Usuario('', 'usuario@correo.es', 'Ana', 'García')}).to.throw(ExcepcionNombreUsuarioIncorrecto);
		})
		
		it('Lanza una excepción si contiene un carácter especial no permitido', function(){
			expect(() => {new Usuario('nombre*usuario', 'usuario@correo.es', 'Ana', 'García')}).to.throw(ExcepcionNombreUsuarioIncorrecto);
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
