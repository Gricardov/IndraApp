# Indra App

# 1- Bibliotecas utilizadas:

# Toastify

Decidí usar esta herramienta por la versatilidad y facilidad que brinda para mostrar mensajes con pocas líneas de código en vista responsiva y de escritorio, además de su personalización con pocas líneas de código.

# Formik

Decidí usarlo por la gran cantidad de funciones listas para usar en validaciones y valores iniciales. Además, es una herramienta conocida, y por lo tanto, cuenta con una gran comunidad para la resolución de problemas.

# Yup

Decidí usarlo por la facilidad que brinda para validar datos. Es flexible, porque permite validar con funciones o con expresiones regulares en pocas líneas de código.

# Classnames

Decidí usarlo por la conveniencia que brinda para pasar nombres de clases a otros componentes, sin tener que hacer validaciones a mano.

# SASS

Decidí usarlo por la fácil implementación, que permite un uso rápido con poca configuración.

# React-router-dom

Decidí usarlo porque es la biblioteca de facto para el enrutamiento de página en React. Es bastante completo y bien documentado.

# React-spinners

Decidí usarlo, porque permite tener varios spinners sin tener que escribir extensas líneas en CSS.

# 2- ¿Cómo levantar el proyecto?

Clonar el repositorio, ejecutar npm install (o yarn) y luego ejecutar npm start (o yarn start)

# 3- ¿Cómo dividí el trabajo?

Creé una carpeta llamada pages para tener todas las páginas ordenadas. Posteriormente, creé la carpeta componentes para las vistas que se iban a reutilizar, como botones, barra principal y barra de progreso. Los componentes que eran poco complejos, poco largos y además no se iban a reutilizar, fueron incluidos como componentes funcionales dentro de los archivos donde estaba su componente padre.

Creé una carpeta llamada context para poder guardar los datos del usuario y este pueda ser accedido desde cualquier página.

Creé una carpeta llamada api donde abstraje todo el código y manejo de errores en las llamadas. De esa forma, obtengo los resultados y posibles errores en una sola línea, de esta forma: const {data, error} = publicFetch(...)

Creé una carpeta llamada utils donde coloqué funciones utilitarias que me permitieran hacer operaciones con strings y manipular el localStorage fácilmente.

# 4- Consideraciones y notas finales

Debido a una dificultad relacionada con mi salud, solicité una nueva fecha de entrega y esta se me concedió para el 24/06 hasta las 11:59pm, como máximo. Solo tuve dos días para avanzar. Debido a, presento dos de las primeras páginas solicitadas. Ambas incluyen las vistas responsivas y todas las validaciones solicitadas.
