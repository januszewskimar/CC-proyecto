class Cliente{
	constructor (nombre, apellidos, correo, contrasenia){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.correo = correo;
		this.contrasenia = contrasenia;
	}
	
	getNombre(){
		return this.nombre;
	}
	
	setNombre(nombre){
		this.nombre = nombre;
	}
	
	getApellidos(){
		return this.apellidos;
	}
	
	setApellidos(apellidos){
		this.apellidos = apellidos;
	}
	
	getNombreCompleto(){
		return this.nombre + ' ' + this.apellidos;
	}
	
	getCorreo(){
		return this.correo;
	}
	
	setCorreo(correo){
		this.correo = correo;
	}
	
	getContrasenia(){
		return this.contrasenia
	}
	
	setContrasenia(contrasenia){
		this.contrasenia = contrasenia;
	}

}
