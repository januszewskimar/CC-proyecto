class Tienda{
	constructor (nombreTienda, nombreAdministrador, apellidosAdministrador, correo, contrasenia, direccion, telefono){
		this.nombreTienda = nombreTienda;
		this.nombreAdministrador = nombreAdministrador;
		this.apellidosAdministrador = apellidosAdministrador;
		this.correo = correo;
		this.contrasenia = contrasenia;
		this.direccion = direccion;
		this.telefono = telefono;
	}
	
	getNombreTienda(){
		return this.nombreTienda;
	}
	
	setNombre(nombre){
		this.nombreTienda = nombreTienda;
	}
	
	getNombreAdministrador(){
		return this.nombreAdministrador;
	}
	
	setNombreAdministrador(nombre){
		this.nombreAdministrador = nombreAdministrador;
	}
	
	getApellidosAdministrador(){
		return this.apellidos;
	}
	
	setApellidos(apellidosAdministrador){
		this.apellidosAdministrador = apellidosAdministrador;
	}
	
	getNombreCompletoAdministrador(){
		return this.nombreAdministrador + ' ' + this.apellidosAdministrador;
	}
	
	getCorreo(){
		return this.correo;
	}
	
	setCorreo(correo){
		this.correo = correo;
	}
	
	getContrasenia(){
		return this.contrasenia;
	}
	
	setContrasenia(contrasenia){
		this.contrasenia = contrasenia;
	}
	
	getDireccion(){
		return this.direccion;
	}
	
	setDireccion(direccion){
		this.direccion = direccion;
	}
	
	getTelefono(){
		return this.telefono;
	}
	
	setTelefono(telefono){
		this.telefono = telefono;
	}

}
