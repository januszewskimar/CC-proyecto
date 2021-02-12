const { Etcd3 } = require('etcd3');
const client = new Etcd3();
import winston = require('winston');
import expressWinston = require('express-winston');
import express = require('express');
import rutasUsuarios from './usuarios/RutasUsuarios';
import rutasAdministradoresTiendas from './administradores-tiendas/RutasAdministradoresTiendas';
import rutasTiendas from './tiendas/RutasTiendas';
import rutasOpiniones from './opiniones/RutasOpiniones';

var app = express();

app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      )
}));

app.use(rutasUsuarios);
app.use(rutasAdministradoresTiendas);
app.use(rutasOpiniones);
app.use(rutasTiendas);

var puerto;

(async() => {
	puerto = await client.get('puerto').string();
})().catch(() => {});
	
if (puerto == null){
	puerto = process.env.PORT || 8080;
}

app.listen(puerto);
console.log('Escuchando en http://127.0.0.1:' + puerto + '/');
