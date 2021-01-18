import 'mocha';
import 'supertest';
import app from '../ServidorOpiniones'; 
import {Usuario} from '../Usuario'; 
import {ExcepcionUsuarioYaExiste} from '../ExcepcionUsuarioYaExiste'; 

var request = require('supertest');

describe('POST /tiendas/:tienda/opiniones', function() {
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

describe('GET /tiendas/:tienda/opiniones', function() {
  it('Publica las opiniones', function(done) {
    request(app)
      .get('/tiendas/Tienda%20Granada/opiniones')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('DELETE /tiendas/:tienda/opiniones/:id', function() {
  it('Elimina una opinión existente', function(done) {
    var data = { "nombreUsuario": "juan", "titulo": "Regular", "valoracionNumerica": "3", "descripcion": "Regular" }
    request(app)
      .post('/tienda/Tienda%20ABC/opiniones')
      .send(data)
      .expect('Content-Type', /text/)
      .expect(200)
      .end(function(){
        request(app)
          .delete('/tiendas/Tienda%20ABC/opiniones/0')
          .expect('Content-Type', /text/)
          .expect(200, done)
      });
  });


  it('Devuelve error si se intenta eliminar una opinión inexistente', function(done) {
    request(app)
      .delete('/tiendas/Tienda%20Granada/opiniones/241')
      .expect('Content-Type', /text/)
      .expect(404, done);
  });
});
