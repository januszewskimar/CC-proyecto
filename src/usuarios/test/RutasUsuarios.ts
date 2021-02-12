import 'mocha';
import 'supertest';
import express = require('express');
import router from '../RutasUsuarios';

var app = express();
app.use(router);

var request = require('supertest');

describe ('Rutas de Usuarios', function(){
  describe('POST /usuarios', function() {
    it('Crea un usuario correctamente si no existe uno con el nombre especificado', function(done) {
      var data = {"nombreUsuario": "juan", "correo": "juan@correo.com", "nombre": "Juan", "apellidos": "Fernández García"}
      request(app)
        .post('/usuarios')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  
    it('Devuelve error cuando se intenta crear un usuario con un nombre que ya está en uso', function(done) {
      var data1 = {"nombreUsuario": "ana", "correo": "ana@correo.com", "nombre": "Ana", "apellidos": "Pérez Rubio"}
      var data2 = {"nombreUsuario": "ana", "correo": "ana@mail.com", "nombre": "Ana", "apellidos": "Alonso Delgado"}
      request(app)
        .post('/usuarios')
        .send(data1)
        .expect('Content-Type', /json/)
        .expect(200).end(function(){
          request(app)
           .post('/usuarios')
           .send(data2)
           .expect('Content-Type', /json/)
           .expect(409, done);});
    });
  
    it('Devuelve error cuando se intenta crear un usuario con un nombre de usuario incorrecto', function(done) {
      var data = {"nombreUsuario": "ju an", "correo": "juan@correo.com", "nombre": "Juan", "apellidos": "Fernández García"}
      request(app)
        .post('/usuarios')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(400, done);
    });
  
    it('Devuelve error cuando se intenta crear un usuario con un correo incorrecto', function(done) {
      var data = {"nombreUsuario": "juan", "correo": "juancorreo.com", "nombre": "Juan", "apellidos": "Fernández García"}
      request(app)
        .post('/usuarios')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(400, done);
    });
  });
});
