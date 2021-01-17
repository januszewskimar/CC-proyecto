import express = require('express');
import { Usuario } from "./Usuario";
import { ControladorOpiniones } from "./ControladorOpiniones";
import { ExcepcionValoracionNumericaIncorrecta } from "./ExcepcionValoracionNumericaIncorrecta";

var app = express();
app.use(express.json());

var controlador: ControladorOpiniones = new ControladorOpiniones();

app.post('/tienda/:tienda/opiniones', function (req, res) {
	try{
		controlador.publicarOpinion(req.body.nombreUsuario, req.params.tienda, req.body.titulo, req.body.valoracionNumerica, req.body.descripcion);
		res.status(200).send("Opinión publicada");
	} catch (err) {
		if (err instanceof ExcepcionValoracionNumericaIncorrecta){
			res.status(400).send("Valoración numérica incorrecta");
		}
		else{
			res.status(500).send("Error no especificado");
		}
	}
});

app.get('/tiendas/:tienda/opiniones', function (req, res) {
	var lista = controlador.getOpinionesNombreTienda(req.params.tienda);
	res.status(200).send(lista);
});

export default app;
