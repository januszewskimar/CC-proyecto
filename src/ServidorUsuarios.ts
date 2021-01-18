import express = require('express');
import { Usuario } from "./Usuario";
import { ControladorUsuarios } from "./ControladorUsuarios";
import { ExcepcionUsuarioYaExiste } from "./ExcepcionUsuarioYaExiste";
import { ExcepcionNombreUsuarioIncorrecto } from "./ExcepcionNombreUsuarioIncorrecto";
import { ExcepcionCorreoIncorrecto } from "./ExcepcionCorreoIncorrecto";

var app = express();
app.use(express.json());

var controlador:ControladorUsuarios = new ControladorUsuarios();

app.post('/usuarios', function (req, res) {
	try{
		var u: Usuario = new Usuario(req.body.nombreUsuario, req.body.correo, req.body.nombre, req.body.apellidos);
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
