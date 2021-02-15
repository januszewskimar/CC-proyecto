import 'mocha';
import chai = require ('chai');
import chaiAsPromised = require ('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
import { ControladorAdministradoresTiendas } from '../ControladorAdministradoresTiendas';
import { AdministradorTienda } from '../../entidades/AdministradorTienda';
import { ExcepcionUsuarioYaExiste } from '../../excepciones/ExcepcionUsuarioYaExiste';



describe('ControladorAdministradoresTiendas', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(ControladorAdministradoresTiendas, 'Cargado');
		})
	})
	
	describe('Guardar administradores de tiendas', function(){
		it ('Lanza una excepción si se crea un administrador con el nombre de usuario igual que uno existente', async function(){
			let controlador = new ControladorAdministradoresTiendas();
			
			let at1 = new AdministradorTienda('marcos123', 'marcos@correo.es', 'Marcos', 'García Santos');
			await controlador.addAdministrador(at1);
			
			let at2 = new AdministradorTienda('marcos123', 'm@correo.es', 'Marcos', 'Fernández Hernández');
			await expect(controlador.addAdministrador(at2)).to.eventually.be.rejectedWith(ExcepcionUsuarioYaExiste);
		})
		
		it ('No lanza una excepción si se crean administradores con nombres de usuarios todavía no usados', async function(){
			let controlador = new ControladorAdministradoresTiendas();
			
			let at1 = new AdministradorTienda('marcos123', 'marcos@correo.es', 'Marcos', 'García Santos');
			await controlador.addAdministrador(at1);
			
			let at2 = new AdministradorTienda('abc123', 'marcos@correo.es', 'Marcos', 'García Santos');
			await controlador.addAdministrador(at2);
		})
	})

})
