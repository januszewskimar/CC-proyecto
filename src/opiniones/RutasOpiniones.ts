import express = require('express');
import { Opinion } from "../entidades/Opinion";
import { RespuestaOpinion } from "../entidades/RespuestaOpinion";
import { ControladorOpiniones } from "./ControladorOpiniones";
import { ExcepcionValoracionNumericaIncorrecta } from "../excepciones/ExcepcionValoracionNumericaIncorrecta";
import { ExcepcionNoHayOpiniones } from "../excepciones/ExcepcionNoHayOpiniones";
import { ExcepcionOpinionNoExiste } from "../excepciones/ExcepcionOpinionNoExiste";
import { ExcepcionRespuestaOpinionNoExiste } from "../excepciones/ExcepcionRespuestaOpinionNoExiste";

var app = express();
app.use(express.json());

var controlador: ControladorOpiniones = new ControladorOpiniones();

app.post('/tiendas/:tienda/opiniones', function (req, res) {
	try{
		var op: Opinion = controlador.publicarOpinion(req.body.nombreUsuario, req.params.tienda, req.body.titulo, req.body.valoracionNumerica, req.body.descripcion);
		res.status(200).send(op);
	} catch (err) {
		if (err instanceof ExcepcionValoracionNumericaIncorrecta){
			res.status(400).send({"error": "Valoración numérica incorrecta"});
		}
		else{
			res.status(500).send({"error": "Error no especificado"});
		}
	}
});

app.get('/tiendas/:tienda/opiniones', function (req, res) {
	var lista = controlador.getOpinionesTienda(req.params.tienda);
	res.status(200).send(lista);
});

app.get('/tiendas/:tienda/valoracion-media', function(req, res) {
	try{
		var resultado = controlador.getValoracionMediaTienda(req.params.tienda);
		res.status(200).send({"valoracion-media": resultado});
	} catch (err) {
		if (err instanceof ExcepcionNoHayOpiniones){
			res.status(406).send({"error": "No existen opiniones sobre la tienda"});
		}
		else{
			res.status(500).send({"error": "Error no especificado"});
		}
	}
});

app.delete('/tiendas/:tienda/opiniones/:id', function (req, res){
	if (controlador.eliminarOpinion(req.params.tienda, req.params.id)){
		res.status(200).send({"mensaje": "Opinión eliminada"});
	}
	else{
		res.status(404).send({"error": "Recurso no encontrado"});
	}	

});

app.put('/tiendas/:tienda/opiniones/:id/respuesta', function (req, res) {
	try{
		var r: RespuestaOpinion = controlador.publicarRespuesta(req.params.tienda, req.params.id, req.body.contenido);
		res.status(200).send(r);
	} catch (err) {
		if (err instanceof ExcepcionOpinionNoExiste){
			res.status(404).send({"error": "La opinión no existe"});
		}
		else{
			res.status(500).send({"error": "Error no especificado"});
		}
	}
});

app.delete('/tiendas/:tienda/opiniones/:id/respuesta', function (req, res){
	try{
		controlador.eliminarRespuestaOpinion(req.params.tienda, req.params.id);
		res.status(200).send({"mensaje:": "Respuesta eliminada"});
	} catch (err) {
		if (err instanceof ExcepcionOpinionNoExiste){
			res.status(404).send({"error": "La opinión no existe"});
		}
		else if (err instanceof ExcepcionRespuestaOpinionNoExiste){
			res.status(404).send({"error": "La opinión no contiene una respuesta"});
		}
		else{
			res.status(500).send({"error": "Error no especificado"});
		}
	}

});

export default app;
