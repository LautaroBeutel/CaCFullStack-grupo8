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

    #Agregar un cliente a la tabla lectores

    def agregar_lector(self, nombre, apellido, nacimiento, email, preferencias, comentario):
        self.cursor.execute(f'SELECT * FROM lectores WHERE titulo = "{email}"')
        respuesta = self.cursor.fetchone()
        if respuesta:
            print(f'Ya existe un lector registrado con este correo elctrónico: {email}')
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

# @app.route('/formulario, methods=["GET"]')
    




clientes = Lectores(host='localhost', user='root', password='', database='grupo8')