# Para inicar la API.
- npm run dev -

# Configuración de API

A continuación se da una breve explicación estructurada de cómo se configuró la API.

## Paso 1: Configuración del Proyecto

1. Se configura un nuevo proyecto creando una nueva carpeta.
   - Se inicia con: `npm init` para crear el proyecto.
   - Instala las dependencias necesarias como Express, mongoose, bcryptjs, etc.
2. Se comienza a configurar el servidor, creando un archivo `server.js` donde se definen las rutas y los middlewares necesarios para realizar las peticiones HTTP.

## Paso 2: Definiciones de Modelo

1. Se definen los modelos de mongoose, creando un archivo para cada modelo (`User` y `Post`), donde se define los esquemas de mongoose para cada modelo, con las propiedades requeridas y las restricciones necesarias como la unicidad del email.

## Paso 3: Implementación de Endpoints

1. Se implementan los endpoints, definiendo las rutas y controladores para cada endpoint:
   - `POST /user` para permitir el registro de nuevos usuarios.
   - `GET /user/:id` para obtener la información de un usuario por su ID.
   - `POST /auth/login` para manejar la autenticación y generar tokens JWT.
   - `POST /posts` para permitir la creación de nuevos posts, asignándolos al usuario que realizó la solicitud.
   - `GET /posts` para listar todos los posts, con soporte para filtrar.
   - `PATCH /posts/:id` para permitir la actualización de un post.
   - `DELETE /posts/:id` para permitir borrar un post.

## Paso 4: Seguridad y Autenticación

1. Se implementa la autenticación con JWT para generar el token de autenticación, verificar estos tokens en las rutas y asegurar que los usuarios estén autenticados para acceder.
2. Se implementa el cifrado de contraseñas utilizando bcryptjs, para cifrar las contraseñas de los usuarios antes de almacenarlas en la base de datos.

## Paso 5: Lógica de Validaciones

1. Se verifica la unicidad de los emails de usuario y la validación de campos requeridos en los endpoints de creación y actualización, asegurando que cumplan su función.

## Paso 6: Pruebas y Depuración

1. Se utilizan herramientas como MongoDB y Atlas para probar cada endpoint y asegurar que funcionen correctamente.
2. Se implementa el manejo adecuado de errores usando el paquete `http-errors` con sus respectivos códigos y mensajes de error apropiados para devolver la respuesta HTTP.

## Paso 7: Configuración de Entorno

1. Se configuran las variables de entorno utilizando el paquete `dotenv` para cargar variables de entorno desde el archivo `.env`, manteniendo segura la configuración sensible de la app (la clave secreta, la generación de tokens, etc.). Se crea un archivo `.example.env` donde se cifran los parámetros, y no se pueden observar para que de esa manera el documento vaya completo en el repositorio.



