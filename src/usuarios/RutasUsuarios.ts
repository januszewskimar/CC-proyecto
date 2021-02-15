import express = require('express');
import { Collection } from 'mongodb';
import { Usuario } from "../entidades/Usuario";
import { ControladorUsuarios } from "./ControladorUsuarios";
import { ExcepcionUsuarioYaExiste } from "../excepciones/ExcepcionUsuarioYaExiste";
import { ExcepcionNombreUsuarioIncorrecto } from "../excepciones/ExcepcionNombreUsuarioIncorrecto";
import { ExcepcionCorreoIncorrecto } from "../excepciones/ExcepcionCorreoIncorrecto";

var router = express.Router();
router.use(express.json());

var controlador:ControladorUsuarios = new ControladorUsuarios();

function getRutas(coleccion: Collection){
	router.post('/usuarios', async function (req, res) {
		try{
			var u: Usuario = new Usuario(req.body.nombreUsuario, req.body.correo, req.body.nombre, req.body.apellidos);
			await controlador.addUsuario(u);
			res.status(201).send(u);
		} catch (err) {
			if (err instanceof ExcepcionNombreUsuarioIncorrecto){
				res.status(400).send({"error": "Nombre de usuario incorrecto"});
			}
			else if (err instanceof ExcepcionCorreoIncorrecto){
				res.status(400).send({"error": "Correo electrónico incorrecto"});
			}
			else if (err instanceof ExcepcionUsuarioYaExiste){
				res.status(400).send({"error": "Ya existe un usuario con este nombre"});
			}
			else{
				res.status(400).send({"error": "Error no especificado"});
			}
		}
	});
	return router;
}

export { getRutas };
