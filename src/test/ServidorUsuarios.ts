import 'mocha';
import 'supertest';
import app from '../ServidorUsuarios'; 

var request = require('supertest');


describe('POST /usuario', function() {
  it('Crea un usuario correctamente si no existe uno con el nombre especificado', function(done) {
    request(app)
      .post('/usuario/juan/juan@correo.com/Juan/Fernández%20García')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200, done);
  });
  
  it('Devuelve error cuando se intenta crear un usuario con un nombre que ya está en uso', function(done) {
    request(app)
      .post('/usuario/ana/ana@correo.com/Ana/Pérez%20Rubio')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200).end(function(){
  
    request(app)
      .post('/usuario/ana/ana@mail.com/Ana/Alonso%20Delgado')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(409, done);});
  });
  
  it('Devuelve error cuando se intenta crear un usuario con un nombre de usuario incorrecto', function(done) {
    request(app)
      .post('/usuario/ju an/juan@correo.com/Juan/Fernández%20García')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(400, done);
  });
  
  it('Devuelve error cuando se intenta crear un usuario con un correo incorrecto', function(done) {
    request(app)
      .post('/usuario/juan/juancorreo.com/Juan/Fernández%20García')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(400, done);
  });
});
