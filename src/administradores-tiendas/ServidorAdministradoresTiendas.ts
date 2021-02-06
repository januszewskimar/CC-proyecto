const { Etcd3 } = require('etcd3');
const client = new Etcd3();
import winston = require('winston');
import expressWinston = require('express-winston');
import app from "./RutasAdministradoresTiendas";

app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      )
}));

var puerto;

(async() => {
	puerto = await client.get('puerto').string();
})().catch(() => {});
	
if (puerto == null){
	puerto = process.env.PORT || 9001;
}

app.listen(puerto);
console.log('Escuchando en http://127.0.0.1:' + puerto + '/');
