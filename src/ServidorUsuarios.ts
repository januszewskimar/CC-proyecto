import express = require('express');
import { Usuario } from "./Usuario";
import { ControladorUsuarios } from "./ControladorUsuarios";
import { ExcepcionUsuarioYaExiste } from "./ExcepcionUsuarioYaExiste";
import { ExcepcionNombreUsuarioIncorrecto } from "./ExcepcionNombreUsuarioIncorrecto";
import { ExcepcionCorreoIncorrecto } from "./ExcepcionCorreoIncorrecto";

var app = express();

var controlador:ControladorUsuarios = new ControladorUsuarios();

app.post('/usuario/:nombreUsuario/:correo/:nombre/:apellidos', function (req, res) {
	try{
		var u: Usuario = new Usuario(req.params.nombreUsuario, req.params.correo, req.params.nombre, req.params.apellidos);
		controlador.addUsuario(u);
		res.status(200).send("Usuario creado");
	} catch (err) {
		if (err instanceof ExcepcionNombreUsuarioIncorrecto){
			res.status(400).send("Nombre de usuario incorrecto");
		}
		else if (err instanceof ExcepcionCorreoIncorrecto){
			res.status(400).send("Correo electrónico incorrecto");
		}
		else if (err instanceof ExcepcionUsuarioYaExiste){
			res.status(409).send("Ya existe un usuario con este nombre");
		}
		else{
			res.status(500).send("Error no especificado");
		}
	}
});

export default app;
