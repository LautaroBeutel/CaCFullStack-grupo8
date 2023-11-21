import mysql.connector
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import time

app = Flask(__name__)
CORS(app)

class Lectores():
    def __init__(self, host, user, password, database):
        self.conn = mysql.connector.connect(host = host, user= user, password= password, database= database)
        self.cursor = self.conn.cursor(dictionary=True)

    #Crear tablas
    def crear_tablas(self):
        self.cursor.execute('SHOW TABLES')
        control = self.cursor.fetchall() 
        self.cursor.execute('CREATE TABLE IF NOT EXISTS lectores (id int(4) AUTO_INCREMENT, nombre varchar(20) NOT NULL, apellido varchar(20) NOT NULL, nacimiento varchar(10) NOT NULL, email varchar(50) NOT NULL, sexo varchar(15) NOT NULL,  preferencias varchar(200) DEFAULT NULL, comentario varchar(140) DEFAULT NULL, PRIMARY KEY (id));')
        self.cursor.execute('CREATE TABLE IF NOT EXISTS productos ( id int(3) AUTO_INCREMENT, titulo varchar(70) DEFAULT NULL, precio int(8) NOT NULL, portada varchar(100) NOT NULL, categoria varchar(20) NOT NULL, autor varchar(20) NOT NULL, paginas int(4) NOT NULL, idioma varchar(20) NOT NULL, publicacion int(4) NOT NULL, descripcion varchar(2000) NOT NULL, stock int(3) NOT NULL, PRIMARY KEY (id));')
        self.cursor.execute('CREATE TABLE IF NOT EXISTS compras ( idArticulo int(4) NOT NULL, idCliente int(4) NOT NULL, cantidad int(2) NOT NULL, FOREIGN KEY (idArticulo) REFERENCES productos(id), FOREIGN KEY (idCliente) REFERENCES lectores(id));')
        self.conn.commit()
        self.cursor.execute('SHOW TABLES')
        respuesta = self.cursor.fetchall()
        if respuesta == control:
            print("No se han creado nuevas tablas ya que las mismas estaban creadas con anterioridad")
            return False
        else:
            print("Las tablas se han creado con éxito")
            return True
    
    #Agregar un cliente a la tabla lectores

    def agregar_lector(self, nombre, apellido, nacimiento, email, preferencias, comentario):
        self.cursor.execute(f'SELECT * FROM lectores WHERE email = "{email}"')
        respuesta = self.cursor.fetchone()
        if respuesta:
            print(f'Ya existe un lector registrado con este correo electrónico: {email}')
            return False
        else:
            self.cursor.execute(f"INSERT INTO lectores (nombre, apellido, nacimiento, email, preferencias, comentario) VALUES ('{nombre}', '{apellido}', '{nacimiento}', '{email}', '{preferencias}', '{comentario}')")
            self.conn.commit()
            return True
    
    #Borrar cliente de la tabla lectores
    
    def borrar_lector(self, id):
        self.cursor.execute(f'SELECT * FROM lectores WHERE id = {id}')
        respuesta = self.cursor.fetchone()
        if respuesta:
            self.cursor.execute(f'DELETE FROM lectores WHERE id = {id}')
            self.conn.commit()
            return self.cursor.rowcount > 0
        else:
            print(f'No se realizó ninguna eliminación ya que no se encuentra ningún registro con el id {id}')
            return False

    #Buscar un cliente en la tabla lectores

    def buscar_lector(self, id):
        self.cursor.execute(f'SELECT * FROM lectores WHERE id = {id}')
        respuesta = self.cursor.fetchone()
        if respuesta:
            print('-' * 10)
            print(respuesta)
            print('-' * 10)
            return True
        else:
            print('-' * 10)
            print('Lector no encontrado')
            print('-' * 10)
            return False

    # Modificar un cliente de la tabla lectores

    def modificar_lector(self, id, columna, modificacion):
        self.cursor.execute(f'SELECT * FROM lectores WHERE id = {id}')
        respuesta = self.cursor.fetchone()
        if respuesta:
            self.cursor.execute(f'UPDATE lesctores SET {columna} = "{modificacion}" WHERE id = {id}')
            self.conn.commit()
            return self.cursor.rowcount > 0
        else:
            print(f'No se realizó ninguna modificación porque no se encontró ningún lector con el id {id}')
            return False

    # Ver todos los clientes

    def ver_lectores(self):
        self.cursor.execute('SELECT * FROM lectores WHERE = 1')
        respuesta = self.cursor.fetchall()
        if respuesta:
            print(respuesta)
            return True
        else:
            print('Error al acceder a los datos de los lectores')
            return False


clientes = Lectores(host='localhost', user='root', password='', database='grupo8')
#clientes.crear_tablas()


