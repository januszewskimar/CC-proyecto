import 'mocha';
import 'supertest';
import app from '../ServidorOpiniones'; 
import {Usuario} from '../Usuario'; 
import {ExcepcionUsuarioYaExiste} from '../ExcepcionUsuarioYaExiste'; 

var request = require('supertest');

describe('POST /opiniones', function() {
  it('Publica una opinión correcta', function(done) {
    var data = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
    request(app)
      .post('/tienda/Tienda%20Granada/opiniones')
      .send(data)
      .expect('Content-Type', /text/)
      .expect(200, done);
  });
  
  it('Devuelve error si se intenta publicar una opinión con una valoración numérica incorrecta', function(done) {
    var data = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "6", "descripcion": "Todo muy bien" }
    request(app)
      .post('/tienda/Tienda%20Granada/opiniones')
      .send(data)
      .expect('Content-Type', /text/)
      .expect(400, done);
  });
});
