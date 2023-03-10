# Api Rest Full con NodeJS

_Este proyecto esta desarrollado con node v16.18.0, utiliza JWT para agregar seguridad, para consultar cada endpoint hay que agregar el token generado al loguearse; para tratar de abarcar todos losposibles ejemplos tenemos 3 versiones:_
* La v1 que obtiene la data de un array dentro del controlador students.
* La v2 que obtiene la data de un archivo json, ubicado en: **src/v2/database/db.json** .
* La v3 que obtiene la data de una base de datos mysql.

_Cada versión cuenta con su respectiva documentación realizada con Swagger, para realizar cambios en la documentación y visualizar como quedaria la documentación, puedes ingresar a:_
* [Editor Swagger](https://editor.swagger.io/) - Editor online de swagger.
* Copiar el contenido de openapi.yaml y pegar en el editor.
* Luego de realizar los cambios.
* File -> Save as YAML(openapi.yaml).
* File -> Save as json(openapi.json).
* Guardar los archivos(con nombre openapi) en la siguiente ruta:
```
src/version(v1, v2 o v3)/swagger
```

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_
* Si usas VSCode tener instaladas las siguientes extensiones:

```
Live preview
Rest Client
Better Comments
```

* Tener instalado nodejs(este proyecto esta desarrollado en v16.18.0), para saber versión de nodejs, abrir terminal y ejecutar:

```
node -v
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

* Abrir terminal bash de VSCode para clonar repositorio de github.

```
git clone https://github.com/marvelnano/apirestnodejs.git
```

_Luego abrir terminal y en powershell o cmd instalar dependencias_

```
npm install
```

_Crear archivos env_

```
development.env
production.env
```

_Ejemplo de contenido de archivo .env_

```
NODE_ENV=development
HOST=127.0.0.1
PORT=3000
SECRET=aqui-va-clave-secreta
TIME_EXEC_TOKEN=60

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=name_db
DB_USERNAME=user
DB_PASSWORD=pass
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

* Cambiar VERSION en archivo config.js ubicada en:
```
src/config.js
```
* Escribir la versión que se desea utilizar:
```
VERSION: 'v3'
```
* La v1 que obtiene la data de un array dentro del controlador students.
* La v2 que obtiene la data de un archivo json, ubicado en: **src/v2/database/db.json** .
* La v3 que obtiene la data de una base de datos mysql.

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

* leer el archivo README.md de la siguiente ruta:
```
src/request/README.md
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_
* Este proyecto fue basado despues de revisar varios videos y documentación.
```
Puedes descargar y realizar tus propias modificaciones, sin afectar los archivos originales claro o puedes crear tu propia rama y ahi subir tus cambios.
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_
* En este caso solo ha sido desplegado de forma local.

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Express](https://expressjs.com/es/starter/installing.html) - El framework web usado
* [Swagger](https://swagger.io/docs/open-source-tools/swagger-editor/) - Manejador de documentación de Api's

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/marvelnano/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/marvelnano/apirestnodejs/wiki)

## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/marvelnano/apirestnodejs/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **José Velásquez** - *Trabajo Inicial* - [marvelnano](https://github.com/marvelnano)
* **José Velásquez** - *Documentación* - [marvelnano](#https://github.com/marvelnano)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/marvelnano/apirestnodejs/contributors) quíenes han participado en este proyecto. 

<!-- ## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles -->

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con mucho ☕ por [marvelnano](https://github.com/marvelnano) 

* Nota: estructura de archivo basada de [Villanuevand](https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a)