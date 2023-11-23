-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2023 a las 23:48:26
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo8`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `idArticulo` int(4) NOT NULL,
  `idCliente` int(4) NOT NULL,
  `cantidad` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lectores`
--

CREATE TABLE `lectores` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `nacimiento` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `sexo` varchar(15) NOT NULL,
  `preferencias` varchar(200) DEFAULT NULL,
  `comentario` varchar(140) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(70) DEFAULT NULL,
  `precio` int(8) NOT NULL,
  `portada` varchar(100) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `autor` varchar(20) NOT NULL,
  `paginas` int(4) NOT NULL,
  `idioma` varchar(20) NOT NULL,
  `publicacion` int(4) NOT NULL,
  `descripcion` varchar(2000) NOT NULL,
  `stock` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `titulo`, `precio`, `portada`, `categoria`, `autor`, `paginas`, `idioma`, `publicacion`, `descripcion`, `stock`) VALUES
(1, 'FRANKENSTEIN', 10590, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/649567.jpg', 'terror', 'Shelley, Mary', 100, 'español', 2018, 'Publicado el 1 de enero de 1818 y enmarcado en la tradición de la novela gótica, el texto habla de temas tales como la moral científica, la creación y destrucción de vida y el atrevimiento de la humanidad en su relación con Dios. De ahí, el subtítulo de la obra: el protagonista intenta rivalizar en poder con Dios, como una suerte de Prometeo moderno que arrebata el fuego sagrado de la vida a la divinidad.', 2),
(2, 'CUENTO DE HADAS', 20199, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/698715.jpg', 'terror', 'King, Stephen', 856, 'español', 2022, 'Estoy seguro de que puedo contar esta historia. También estoy seguro de que nadie se la creerá. Eso me da igual. Me basta con contarla. Para mí -y está claro que para muchos escritores; no solo los novatos como yo-; el problema es decidir por dónde empezar. (...) Y ahora; mientras pienso en esas cosas; veo un claro hilo que conduce a lo largo de los años hasta el señor Bowditch y el cobertizo cerrado con candado detrás de su vieja y ruinosa casa victoriana. Aunque un hilo puede romperse fácilmente. Por tanto; no un hilo; sino una cadena. Una cadena sólida. Y yo era el chico con el grillete en torno a la muñeca.', 3),
(3, 'HOLLY', 15999, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/710073.jpg', 'terror', 'King, Stephen', 624, 'español', 2023, 'Holly Gibney; uno de los personajes más cautivadores e ingeniosos de Stephen King; regresa en esta trepidante novela para descubrir la verdad que se esconde tras múltiples desapariciones en una ciudad del Medio Oeste. Cuando Penny Dahl contacta con Finders Keepers para que la ayuden a encontrar a su hija; algo en la voz desesperada de la mujer hace que Holly Gibney se vea obligada a aceptar el trabajo. A poca distancia del lugar en el que Bonnie Dahl desapareció; viven los profesores Rodney y Emily Harris. Son la quintaesencia de la respetabilidad burguesa: un matrimonio octogenario y dedicado de académicos semirretirados. Nadie diría que; en el sótano de su impecable casa forrada de libros; esconden un secreto directamente relacionado con la desaparición de Bonnie. Sin embargo; los Harris son astutos; pacientes y despiadados; y obligarán a Holly a emplear sus habilidades al máximo y a arriesgarlo todo si quiere cerrar el caso más oscuro al que se ha enfrentado jamás. «No podía olvidarme de Holly Gibney. Se suponía que solo iba a ser un personaje secundario en Mr. Mercedes; pero se llevó toda la atención y mi corazón. Holly es ella en estado puro». Stephen King', 5),
(4, 'EXTRAÑO CASO DEL DR JEKYLL Y MR HYDE Y OTROS CUENTOS', 4800, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/709821.jpg', 'terror', 'Stevenson, Robert', 252, 'español', 2023, 'Esta memorable novela de Robert Louis Stevenson es una alegoría moral; un magistral relato de suspenso que sucesivas generaciones de lectores han convertido en un clásico de la lectura universal. Publicada por primera vez 1886; la novela trata acerca de un abogado; Gabriel John Utterson; que investiga la extraña relación entre su viejo amigo; el Dr. Henry Jekyll; y el misántropo Edward Hyde. El extraño caso del Dr. Jekyll y Mr. Hyde es una mezcla de misterio; terror y ciencia ficción; que se inmortalizó como la historia del hombre y la bestia. En una Londres envuelta en niebla y frío; suceden hechos increíbles que revelan el lado oscuro del alma humana. El núcleo de la obra radica en la dualidad del espíritu humano; balanceándose entre los principios del bien y del mal; y conduciendo al protagonista a una doble personalidad mediante los efectos de una pócima científica. Este volumen incluye los siguientes cuentos: Janet; la Torcida; El Ladrón de Cadáveres; Markheim; Olalla; El Diablo en la Botella.', 0),
(5, 'LA SANGRE MANDA', 9999, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/709169.jpg', 'terror', 'King, Stephen', 464, 'español', 2023, 'Stephen King nos brinda cuatro novelas cortas sobre las fuerzas ocultas que nos acechan. En esta colección única nos ofrece un impactante noir paranormal; protagonizado por la carismática Holly Gibney; así como tres relatos más que ponen de manifiesto el incomparable talento; la imaginación sin par y la diversidad de registros de este legendario narrador. La crítica dijo: «Las cuatro historias que componen esta edición nos muestran a King; el maestro del terror; en todo su esplendor». Publishers Weekly «El King de siempre: un placer para sus incontables fans y un buen punto de partida si todavía no lo conoces». Kirkus Reviews «Te mantendrá en vela; absorto en estas cuatro narraciones acerca de nuestros sueños y debilidades». USA Today «Excepcionalmente absorbentes; estas historias confirman a King como el maestro del género». The Washington Post', 2),
(6, 'ARSENE LUPIN Y LA SEÑORITA DE LOS OJOS VERDES', 7060, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/709828.jpg', 'terror', 'Leblanc, Maurice', 232, 'español', 2023, 'La señorita de los ojos verde jade; la más atractiva y seductora mujer con la que Lupin se haya cruzado; muestra una imagen gentil y radiante; pero oculta su perfil criminal de ladrona y asesina. La señorita de los ojos verde jade; a quien su instinto de hombre lo había empujado desde el primer instante en que la vio; ahora vuelve a aparecer con aquella blusa manchada de sangre; con el rostro desencajado y en compañía de dos temibles asesinos; y; al igual que ellos; asaltando; asesinando; sembrando la muerte y el terror. A pesar de todo; Lupin se verá envuelto en la telaraña de esta perversa mujer. Con un ritmo vibrante y suspenso inagotable; se entremezcla el policial y la pasión en una novela llena de aventuras', 5),
(7, 'LOS FANTASMAS FAVORITOS DE ROALD DAHL', 12000, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/708408.jpg', 'terror', 'Dahl, Roald', 304, 'español', 2023, '«Las buenas historias de fantasmas; al igual que los buenos libros infantiles; son tremendamente complicadas de escribir. Yo mismo soy escritor de relatos; y aunque llevo cuarenta y cinco años ejerciendo y siempre he deseado escribir una sola historia de fantasmas decente; nunca he logrado sacarla adelante. Y bien sabe Dios que lo he intentado. En una ocasión creí que lo había conseguido. Fue con un cuento que ahora se titula \'La patrona\'. Pero cuando lo terminé y lo examiné detenidamente; comprendí que no era lo bastante bueno. No lo había logrado. Yo no tenía ese don; y punto. Así que al final cambié el final y lo transformé en una historia de no fantasmas. Desde 1958; año en que llevé a cabo mi investigación sobre las historias de fantasmas; he seguido leyendo todas las nuevas que han ido llegando hasta mí. Puede que se me hayan escapado una o dos; pero nada de lo que yo haya visto publicado desde entonces se ha acercado siquiera al nivel del selecto grupo de este libro. Espero que estas historias de fantasmas les resulten espeluznantes. Que les den escalofríos y perturben sus pensamientos. Fueron escritas precisamente con ese objetivo.» Roald Dahl', 10),
(8, 'EL HOBBIT', 9000, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/708278.jpg', 'ciencia ficcion', 'Tolkien, J. R. R.', 448, 'español', 2023, 'El Hobbit es uno de los principales clásicos modernos y el preludio de El Señor de los Anillos.Bilbo Bolsón es como cualquier hobbit: no mide más de metro y medio; vive pacíficamente en la Comarca; y su máxima aspiración es disfrutar de los placeres sencillos de la vida: comer bien; pasear y charlar con los amigos. Pero su tranquilidad se ve interrumpida cuando el mago Gandalf y un grupo de trece enanos se presentan un día en su casa para involucrarlo en una aventura. Con la ayuda de un mapa misterioso; partirán hacia la Montaña Solitaria con el fin de rescatar el valioso tesoro custodiado por Smaug el Dorado; un terrible y enorme dragón. A pesar de las reticencias de Bilbo a participar en esta búsqueda; pronto descubrirá una temeridad y una habilidad como ladrón que jamás hubiera sospechado poseer.', 5),
(9, 'EL GATO Y LA CIUDAD', 6350, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/707278.jpg', 'ciencia ficcion', 'Bradley, Nick', 320, 'español', 2023, 'En Tokio; una de las megaciudades más grandes del mundo; un gato sin hogar recorre los callejones. Y; en su camino; se cruza con las vidas aparentemente dispares de algunos ciudadanos y los une de maneras inesperadas. Sin embargo; la ciudad está cambiando; y son esos cambios los que llevan al gato a los márgenes de la ciudad; donde se encuentra con una serie de supuestos desconocidos: desde un sintecho que vive en un hotel abandonado hasta un ermitaño que teme salir de casa; pasando por un trabajador de supermercado en busca del amor. El gato rodea a los habitantes de Tokio y los acerca cada vez más. A través de una serie de fascinantes historias entrelazadas; Nick Bradley teje una novela de interrelaciones y distanciamiento; de supervivencia y autodestrucción; del deseo de pertenecer a algún lugar y la necesidad de huir de él. Con una original narrativa que roza los temas políticos con suma astucia; El gato y la ciudad es una auténtica montaña rusa de emociones a través de las calles menos conocidas de Tokio. «La ingeniosa coreografía de una ciudad en constante movimiento orquestada por Nick Bradley resulta emocionante; sorprendente y; en ocasiones; sobrecogedora». ¿THE GUARDIAN', 2),
(10, 'CRONICAS MARCIANAS', 5500, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/673605.jpg', 'ciencia ficcion', 'Bradbury, Ray', 352, 'español', 2020, 'Recopilación de relatos que recogen la crónica de la colonización de Marte por parte de una humanidad que huye de un mundo al borde de la destrucción. Los colonos llevan consigo sus deseos más íntimos y el sueño de reproducir en el Planeta Rojo una civilización de perritos calientes; cómodos sofás y limonada en el porche al atardecer. Pero su equipaje incluye también los miedos ancestrales; que se traducen en odio a lo diferente; y las enfermedades que diezmarán a los marcianos. Conforme a su concepción de lo que debe ser la ciencia ficción; Bradbury se traslada al futuro para iluminar el presente y explorar la naturaleza humana. Con este libro inauguramos la colección «Esenciales Minotauro» con todos los títulos clásicos y atemporales del sello en un nuevo formato. Se trata de una selección de obras de la talla de Crónicas marcianas; ¿Sueñan los androides...?; El hombre del castillo; Soy Leyenda o Fahrenheit 451.', 0),
(11, 'FAHRENHEIT 451', 7000, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/674409.jpg', 'ciencia ficcion', 'Bradbury, Ray', 272, 'español', 2020, 'Guy Montag es un bombero y el trabajo de un bombero es quemar libros; que están prohibidos porque son causa de discordia y sufrimiento. El Sabueso Mecánico del Departamento de Incendios; armado con una letal inyección hipodérmica; escoltado por helicópteros; está preparado para rastrear a los disidentes que aún conservan y leen libros. Como 1984; de George Orwell; como Un mundo feliz; de Aldous Huxley; Fahrenheit 451 describe una civilización occidental esclavizada por los medios; los tranquilizantes y el conformismo. La visión de Bradbury es asombrosamente profética: pantallas de televisión que ocupan paredes y exhiben folletines interactivos; avenidas donde los coches corren a 150 kilómetros por hora persiguiendo a peatones; una población que no escucha otra cosa que una insípida corriente de música y noticias transmitidas por unos diminutos auriculares insertados en las orejas.', 4),
(12, 'OBRA SELECTA JULIO VERNE', 11556, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/689532.jpg', 'aventura', 'Verne, Julio', 511, 'español', 2021, 'OBRA SELECTA contiene grandes clásicos de este autor como lo son \'La vuelta al mundo en 80 dias\', \'De la Tierra a la Luna\' y \'Diez horas de caza\'.', 0),
(13, 'DON QUIJOTE DE LA MANCHA', 24099, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/610456.jpg', 'aventura', 'De Cervantes, Miguel', 1256, 'español', 2016, 'Los años 2015 y 2016 conforman un bienio de aniversarios cervantinos. A la celebración del IV Centenario de la publicación de la segunda parte de Don Quijote (2015); le sigue; en 2016; la conmemoración del IV Centenario de la muerte de su autor; Miguel de Cervantes. Como ocurrió hace más de una década; las Academias de la Lengua Española y la editorial Alfaguara se unen a esta celebración con la reedición de este clásico universal; que llevaba siete años fuera de las librerías. Esta edición reproduce el texto crítico y las notas de Francisco Rico; a su vez coordinador del volumen; y se completa con estudios de escritores y filólogos de la talla de Mario Vargas Llosa; Francisco Ayala; Martín de Riquer; José Manuel Blecua; Guillermo Rojo; José Antonio Pascual; Margit Frenk y Claudio Guillén. Como novedad; la presente edición cuenta con un prólogo de Darío Villanueva; director de la Real Academia Española; escrito especialmente para la ocasión. La crítica ha dicho... «Lo considero un libro para el siglo XXI.» Mario Vargas Llosa «Uno de los grandes acontecimientos literarios del año.» ABC «El volumen tiene una sobria y elegante presentación y una cuidadísima realización.» José Andrés Rojo; El País', 4),
(14, 'DIOSES DE MARTE (SAGA JOHN CARTER)', 8500, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/709903.jpg', 'aventura', 'Burroughs, Edgar Ric', 288, 'español', 2023, 'Después de sus hazañas desafiando a la muerte; John Carter se vio obligado a regresar a la Tierra; pero 10 años después; finalmente; fue enviado de regreso al planeta rojo. Carter sueña con reunirse con su hermosa esposa Dejah Thoris; aunque primero debe unirse a su aliado marciano Tars Tarkas para luchar contra una gran variedad de enemigos; incluidos los mortales Piratas de Barsoom en su veloz nave aérea. En medio de todo el emocionante manejo de la espada y la intriga; Carter aprenderá más sobre las antiguas divisiones teológicas; raciales y políticas que han mantenido a Marte en conflicto durante siglos. Los dioses de Marte de 1918; es la segunda novela de la famosa serie Barsoom. Se puede decir que la historia marcó la pauta para mucha de la ciencia ficción que estaba por venir. Su influencia se puede ver claramente en franquicias como Star Trek y Farscape. Si bien Burroughs sin duda tomó prestado generosamente de la ficción pulp de su época; en particular los westerns y los cuentos de capa y espada; el ritmo y los temas mostraron el camino para el género de ciencia ficción de aventura. Se podría decir que el protagonista; John Carter; con su habilidad en el combate cuerpo a cuerpo y sus coqueteos con hermosas mujeres alienígenas; sentó las bases para posteriores héroes icónicos como el Capitán James T. Kirk y James Bond.', 3),
(15, 'ROBINSON CRUSOE', 3491, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/692875.jpg', 'aventura', 'Defoe, Daniel', 271, 'español', 2023, 'Robinson Crusoe, la más famosa de las novelas de Daniel Defoe, relata la soledad y la construcción de una sociedad ideal, totalmente al margen del mundo. La historia, que ha atrapado por igual a centenares de generaciones de lectores, está inspirada en las aventuras del marino Alexander Selkirk, que había sido abandonado en una isla del archipiélago Juan Fernández, frente a las costas de Chile.', 0),
(16, 'LA SOMBRA DE LOS DIOSES', 9600, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/704839.jpg', 'aventura', 'Gwynne, John', 496, 'español', 2023, ' The Witcher y Vikingos se funden en esta saga de fantasía inspirada en la civilización nórdica del aclamado escritor inglés John Gwynne que emocionará a sus fans y será un punto de partida perfecto para nuevos lectores. Ha pasado un siglo desde que los dioses lucharon y se extinguieron. Ahora solo quedan sus huesos; que prometen un gran poder a aquellos lo suficientemente valientes como para buscarlos. Mientras los susurros de guerra resuenan en la tierra de Vigrið; el destino sigue los pasos de tres guerreros: una cazadora en una búsqueda peligrosa; una mujer noble que busca la fama en la batalla y un esclavo que busca venganza entre los mercenarios conocidos como los Hermanos de Sangre. Los tres darán forma al destino del mundo; ya que una vez más cae bajo la sombra de los dioses.', 4),
(17, 'CRIMEN Y CASTIGO', 11499, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/598289.jpg', 'policial', 'Dostoievski, Fiodor', 752, 'español', 2015, '\'La mentira es el único privilegio del hombre sobre todos los demás animales.\' Considerada por la crítica como la primera obra maestra de Dostoievski; Crimen y castigo es un profundo análisis psicológico de su protagonista; el joven estudiante Raskólnikov; cuya firme creencia en que los fines humanitarios justifican la maldad lo conduce al asesinato de una usurera. Pero; desde que comete el crimen; la culpa será una pesadilla constante con la que el estudiante será incapaz de convivir. La presente edición de una de las obras más importantes de la literatura universal cuenta con la célebre traducción de Rafael Cansinos Assens; revisada y actualizada para la ocasión; y una introducción de David McDuff; traductor y crítico literario especialista en la obra del autor.', 7),
(18, 'LOS ARCHIVOS SECRETOS DE SHERLOCK HOLMES', 2860, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/706469.jpg', 'policial', 'Conan Doyle, Arthur', 288, 'español', 2023, 'Sherlock Holmes es un detective privado de ficción creado en 1887 por el escritor británico Arthur Conan Doyle. Es un personaje inglés de finales del siglo xix que destaca por su inteligencia, su hábil uso de la observación y el razonamiento deductivo para resolver casos difíciles. Sin duda, un clásico del género policíaco que no debe faltar en ninguna biblioteca.', 0),
(19, 'CURIOSO INCIDENTE DEL PERRO A MEDIANOCHE', 7199, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/704322.jpg', 'policial', 'Haddon, Mark', 272, 'español', 2023, 'Su protagonista, Christopher Boone, es uno de los más originales que han surgido en el panorama de la narrativa internacional en los últimos años, y está destinado a convertirse en un héroe literario universal de la talla de Oliver Twist y Holden Caulfield. A sus quince años, Christopher conoce las capitales de todos los países del mundo, puede explicar la teoría de la relatividad y recitar los números primos hasta el 7.507, pero le cuesta relacionarse con otros seres humanos. Le gustan las listas, los esquemas y la verdad, pero odia el amarillo, el marrón y el contacto físico. Si bien nunca ha ido solo más allá de la tienda de la esquina, la noche que el perro de una vecina aparece atravesado por un horcón, Christopher decide iniciar la búsqueda del culpable. Emulando a su admirado Sherlock Holmes -el modelo de detective obsesionado con el análisis de los hechos-, sus pesquisas lo llevarán a cuestionar el sentido común de los adultos que lo rodean y a desvelar algunos secretos familiares que pondrán patas arriba su ordenado y seguro mundo.', 2),
(20, 'ESTUDIO EN ESCARLATA', 14150, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/698752.jpg', 'policial', 'Conan Doyle, Arthur', 224, 'español', 2022, 'Estudio en escarlata (1887) es la primera obra de Arthur Conan Doyle en la que aparece Sherlock Holmes; el detective más famoso de todos los tiempos. Solo él podría desentrañar este asesinato desconcertante; rodeado de signos extraños.', 4),
(21, 'LA MUJER DE BLANCO', 19150, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/692147.jpg', 'policial', 'Collins, Wilkie', 704, 'español', 2022, 'Basada en un hecho real y llevada al cine en numerosas ocasiones; La mujer de blanco; con su trepidante ritmo narrativo; mezcla de forma magistral suspense; misterio y melodrama. Esta deliciosa obra; considerada como precursora del género policíaco y que inspiró el personaje de Sherlock Holmes; se ha convertido por derecho propio en uno de los grandes clásicos de la literatura. Wilkie Collins; uno de los autores más destacados y prolíficos de la literatura británica del siglo XIX; alcanzó su cima creativa con esta apasionante historia.', 6),
(22, 'ENOLA HOLMES - EL CASO DEL MARQUES DESAPARECIDO', 6499, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/690127.jpg', 'policial', 'Springer, Nancy', 224, 'español', 2021, 'Enola Holmes; hermana pequeña del famoso detective Sherlock Holmes; decide viajar hasta Londres dispuesta a encontrar alguna pista que la conduzca hasta su madre; desaparecida recientemente. Sin embargo; nadie puede prepararla para lo que la espera allí. Al pisar el asfalto de la ciudad; se verá envuelta en el secuestro de un joven marqués y deberá sortear a toda costa a sus inteligentes hermanos mayores; que pretenden llevarla a un internado. ¿Podrá Enola descifrar los enigmas que le ha dejado su madre y encontrarla?', 2),
(23, 'NARRACIONES EXTRAORDINARIAS', 12850, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/643590.jpg', 'otros', 'Poe, Edgar Allan', 100, 'español', 2018, 'Edgar Allan Poe (1809-1849) es, sin duda, uno de los maestros del relato corto, género del que fue pionero. Célebre por sus historias de terror y misterio, Poe supo dar vida y expresión a las regiones más oscuras y turbulentas del alma humana. Narraciones extraordinarias reúne una selección de sus mejores cuentos y varios de sus maravillosos poemas. Las ilustraciones han sido creadas expresamente para esta edición.', 5),
(24, 'HISTORIAS DE DIVAN DIEZ RELATOS DE VIDA', 7500, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/709240.jpg', 'otros', 'Rolon, Gabriel', 352, 'español', 2023, 'En 2007 Gabriel Rolón iniciaba un viaje único de la mano de la publicación de Historias de diván. Un recorrido que no sólo lo convertiría en el escritor más vendido de la Argentina de las últimas décadas; sino que también le permitió llevar adelante una misión que él mismo se impuso desde el inicio: sostener al psicoanálisis como una disciplina capaz de transformar una vida; de dar alivio a quien padece un dolor. Más de 300.000 ejemplares vendidos; traducciones; series de televisión; obras de teatro y congresos inter-nacionales no hacen más que celebrar una relación única entre un autor y sus lectores. Y a la vez dicen tarea cum-plida: Rolón supo marcar \'como nadie\' un antes y un después en la difusión y en la defensa del psicoanálisis. ', 2),
(25, 'CASTILLOS DE ARENA', 10900, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/709881.jpg', 'otros', 'Sordelli, Veronica', 290, 'español', 2023, 'Supo que llevaría las cicatrices de un pasado que había dejado huellas. Miró el camino recorrido con la certeza de dejarlo atrás; nada la detendría; su fortaleza era su mejor arma para abrazarse al futuro. Elena transita un duelo; sus ilusiones se han desmoronado como castillos de arena. Debe levantarse; seguir; volver a encaminar su vida. Jayif busca sentirse libre y ser feliz; sin el peso de los mandatos impuestos por su cultura. Un viaje; una conexión; un destino será el comienzo de una aventura en el desierto. Juntos deberán evaluar los riegos; y aceptar que las decisiones que tomen pueden acabar con sus vidas o la de las personas que más quieren. Romance; acción; situaciones límite y costumbres de Medio Oriente se fusionan para contar una historia de amor; valentía; resistencia y superación.', 0),
(26, 'ERASE UNA VEZ UN CORAZON ROTO', 9650, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/693811.jpg', 'otros', 'Garber, Stephanie', 416, 'español', 2022, 'Stephanie Garber; la aclamada autora de la trilogía Caraval; nos vuelve a sorprender con un fantasy apasionante; que ya se ha convertido en un éxito en todo el mundo. Recuerda¿ nunca hagas un trato con un Destino. Evangeline Fox se crio en la tienda de curiosidades de su amado padre; donde creció con leyendas sobre seres inmortales; como el trágico Príncipe de Corazones. Sabe que sus poderes son míticos; que vale la pena morir por su beso y que los tratos con él rara vez terminan bien. Pero cuando Evangeline se entera de que el amor de su vida está a punto de casarse con otra; se desespera lo suficiente como para ofrecerle al Príncipe de Corazones lo que quiera; a cambio de su ayuda para detener la boda. El príncipe solo pide tres besos. Pero el Príncipe de Corazones quiere mucho más de ella de lo que ha prometido. Y tiene planes para Evangeline que terminarán en la mayor felicidad para siempre; o en la tragedia más exquisita¿ ¿Hasta dónde serías capaz de llegar con tal de tener un final feliz?', 2),
(27, 'ROMPER EL CICLO', 9580, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/702716.jpg', 'autoayuda', 'GOMEZ BADIA, MARIANA', 256, 'español', 2022, 'Siempre tropiezas con la misma piedra en las relaciones de pareja; en el manejo del dinero; con ese miedo que te controla; con esa adicción; con el vacío existencial que te sobrepasa... lo que necesitas es romper el ciclo. Mariana Gómez Badía; coach sistémica y consteladora familiar; con más de 160.000 seguidores su Instagram @ecosdelalmaok; te guiará a través de las constelaciones familiares para que desates los nudos invisibles que boicotean tu vida. Darte permiso para soltar aquello que no te pertenece. Prólogo de Gabriela Arias Uriburu', 2),
(28, 'ESTAS PARA MAS', 9940, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/691781.jpg', 'autoayuda', 'De Lucia, Daniela', 376, 'español', 2022, 'Te conformas con poco tiempo y dinero; con una amistad que no va más; con un trabajo que no te apasiona; con una pareja sin amor¿ ¿Por qué seguir viviendo a media máquina? ¡ESTÁS PARA MÁS! Daniela De Lucía; coach certificada con Tony Robbins y Cloé Madanes; con más de 120.000 seguidores en Instagram; te desafía a salir del piloto automático y a encontrar el poder para crear la vida que mereces. SI NO ES AHORA; ¿CUÁNDO?', 2),
(29, 'EL PODER DEL AHORA', 7199, 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/595822.jpg', 'autoayuda', 'Tolle, Eckhart', 266, 'español', 2015, 'El poder del ahora es un libro único. Tiene la capacidad de crear una experiencia en los lectores y de cambiar su vida. Hoy ya es considerado una obra maestra. Su autor; Eckhart Tolle; se convirtió en un maestro universal; un gran espíritu con un mensaje revelador: se puede alcanzar un estado de iluminación aquí y ahora. Es posible vivir libre del sufrimiento; la ansiedad y la neurosis. Para lograrlo sólo tenemos que comprender nuestro papel de creadores del propio dolor. Es la mente la que nos causa los problemas con su corriente de pensamientos constante sobre el pasado; preocupándose por el futuro. Cometemos el error de identificarnos con ella; de pensar que eso es lo que somos; cuando de hecho somos seres mucho más grandes. Escrito en un formato de preguntas y respuestas que lo hace muy accesible; este libro es una invitación a la reflexión; que abrirá las puertas a la plenitud espiritual y permitirá ver la vida con nuevos ojos y empezar a disfrutar del verdadero poder del ahora.', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD KEY `idArticulo` (`idArticulo`),
  ADD KEY `idCliente` (`idCliente`);

--
-- Indices de la tabla `lectores`
--
ALTER TABLE `lectores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lectores`
--
ALTER TABLE `lectores`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`idArticulo`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`idCliente`) REFERENCES `lectores` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
