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





clientes = Lectores(host='localhost', user='root', password='', database='grupo8')