import mysql.connector

class Articulo():

    #Conexion a la base de datos

    def __init__(self, host, user, password, database):
        self.conn = mysql.connector.connect(host = host, user= user, password= password, database= database)
        self.cursor = self.conn.cursor(dictionary=True)

    #Agregar un articulo a la tabla productos

    def agregar_articulo(self, titulo, precio, portada, categoria, autor, paginas, idioma, publicacion, descripcion, stock):
        self.cursor.execute(f'SELECT * FROM productos WHERE titulo = "{titulo}"')
        respuesta = self.cursor.fetchone()
        if respuesta:
            print(f'No se ha agregado al articulo ya que el libro con el titulo {titulo} ya existe en la base de datos.')
            return False
        else:
            self.cursor.execute(f'INSERT INTO productos (titulo, precio, portada, categoria, autor, paginas, idioma, publicacion, descripcion, stock) VALUES ("{titulo}", {precio}, "{portada}", "{categoria}", "{autor}", {paginas}, "{idioma}", {publicacion}, "{descripcion}", {stock})')
            self.conn.commit()
            return True
    
    #Borrar articulo de la tabla de productos
    
    def borrar_articulo(self, id):
        self.cursor.execute(f'SELECT * FROM productos WHERE id = {id}')
        respuesta = self.cursor.fetchone()
        if respuesta:
            self.cursor.execute(f'DELETE FROM productos WHERE id = {id}')
            return True
        else:
            print(f'No se borro el artículo porque no se encontró ningún producto con el id {id}')
            return False

    #Buscar un articulo en la tabla productos

    def buscar_articulo(self, id):
        self.cursor.execute(f'SELECT * FROM productos WHERE id = {id}')
        respuesta = self.cursor.fetchone()
        if respuesta:
            print('-' * 10)
            print(respuesta)
            print('-' * 10)
            return True
        else:
            print('-' * 10)
            print('Producto no encontrado')
            print('-' * 10)
            return False

    # Modificar un articulo de la tabla productos

    def modificar_articulo(self, id, columna, modificacion):
        self.cursor.execute(f'SELECT * FROM productos WHERE id = {id}')
        respuesta = self.cursor.fetchone()
        if respuesta:
            self.cursor.execute(f'UPDATE productos SET {columna} = "{modificacion}" WHERE id = {id}')
            self.conn.commit()
            return True
        else:
            print(f'No se modificó el artículo porque no se encontró ningún producto con el id {id}')
            return False

libreria = Articulo(host='localhost', user='root', password='', database='grupo8')

