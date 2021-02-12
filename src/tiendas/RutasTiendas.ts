import express = require('express');
import { Tienda } from "../entidades/Tienda";
import { ControladorTiendas } from "./ControladorTiendas";
import { ExcepcionTelefonoIncorrecto } from "../excepciones/ExcepcionTelefonoIncorrecto";

var router = express.Router();
router.use(express.json());

var controlador:ControladorTiendas = new ControladorTiendas();

router.post('/tiendas', function (req, res) {
	try{
		var t = new Tienda(req.body.nombre, req.body.direccion, req.body.telefono, req.body.administrador);
		t = controlador.addTienda(t);
		res.status(201).send(t);
	} catch (err) {
		if (err instanceof ExcepcionTelefonoIncorrecto){
			res.status(400).send({"error": "Teléfono incorrecto"});
		}
		else{
			res.status(400).send({"error": "Error no especificado"});
		}
	}
});

export default router;
