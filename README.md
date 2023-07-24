# Cine Y Series

    Proyecto FullStack de información sobre películas creado con las tecnologías MERN (MongoDB, Express, React y Node.js).

## Funcionalidades

- Header de navegación:  el header contiene los enlaces a las diferentes vistas de la aplicación, 
 incluyendo la vista de inicio, la vista de favoritos, y el login y resgistro.
 
- Registro y Login: la aplicación permite a los usuarios registrarse y loguearse para acceder a las funcionalidades exclusivas de usuario.

- Home: Muestra una lista de películas o series, incluyendo una imagen de la misma, el título, su puntaje y un botón de favorito.

- Filtros: Dentro de la pagina de inicio podemos encontrar una seccion de filtros, en los mismos podemos filtrar la lista de películas o series por "Polulares", "Taquilleras", "Estrenos", etc.
 también podemos filtrar por generos y hacer una busqueda de una película o serie en específico.

- Vista de detalles de las películas o series: al hacer click en una película o serie, el usuario es llevado a la vista de detalles de la misma que muestra la fecha de su estreno, una breve descripción,
   el "cast", los generos, trailers y otros videos descriptivos, y por último una lista de películas o series similares.

## Dependencias del Proyecto

### Frontend

1. **typescript**
    - Descripción: Un superconjunto de JavaScript que agrega tipado estático opcional. Permite detectar errores en tiempo de compilación y mejora la calidad del código.
    - Enlace: [Ver en npm](https://www.npmjs.com/package/typescript)

2. **react**
   - Descripción: Una biblioteca JavaScript para construir interfaces de usuario interactivas y reactivas. Es la base de este proyecto y permite crear componentes reutilizables y dinámicos.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/react)

3. **react-dom**
   - Descripción: La biblioteca que permite renderizar los componentes de React en el navegador. Es necesaria para trabajar con React en el entorno web.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/react-dom)

4. **next**
   - Descripción: El framework para React que permite crear aplicaciones web rápidas y eficientes. Facilita el enrutamiento, el manejo del servidor y ofrece características como el renderizado en el lado del servidor (SSR) y el renderizado en el lado del cliente (CSR).
   - Enlace: [Ver en npm](https://www.npmjs.com/package/next)

5. **@tanstack/react-query**
   - Descripción: Una librería para gestionar el estado de la caché y las solicitudes de datos en aplicaciones React. Facilita la comunicación con servicios y la gestión del estado de forma sencilla y efectiva.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/@tanstack/react-query)

6. **cookies-next**
   - Descripción: Un paquete para trabajar con cookies en aplicaciones Next.js. Permite leer y escribir cookies tanto en el servidor como en el cliente.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/cookies-next)
    
7. **formik**
   - Descripción: Una biblioteca para crear formularios en React. Facilita la validación, manejo de campos y mensajes de error de manera simple y declarativa.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/formik)

8. **react-select**
   - Descripción: Un componente select avanzado para React. Permite crear selectores personalizados con funcionalidades adicionales como búsqueda, etiquetas y más.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/react-select)

9. **swiper**
   - Descripción: Una biblioteca para crear carruseles y sliders en aplicaciones web. Es altamente personalizable y fácil de integrar con React.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/swiper)

10. **yup**
    - Descripción: Una librería para validar esquemas de objetos y datos en JavaScript. Es especialmente útil para validar formularios y datos antes de enviarlos al servidor.
    - Enlace: [Ver en npm](https://www.npmjs.com/package/yup)

11. **eslint**
    - Descripción: Una herramienta de linting para JavaScript que ayuda a mantener un código limpio y consistente. Proporciona advertencias y errores para prácticas de código no deseadas.
    - Enlace: [Ver en npm](https://www.npmjs.com/package/eslint)

12. **sweetalert2**
    - Descripción: Una biblioteca para crear modales y diálogos personalizados en aplicaciones web. Ofrece una variedad de estilos y opciones de personalización.
    - Enlace: [Ver en npm](https://www.npmjs.com/package/sweetalert2)

### Backend

1. **typescript**
   - Descripción: Un superconjunto de JavaScript que agrega tipado estático opcional. Permite detectar errores en tiempo de compilación y mejora la calidad del código en el backend.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/typescript)

2. **express**
   - Descripción: Un framework minimalista y flexible para Node.js que facilita la creación de servidores y el manejo de rutas y peticiones HTTP.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/express)

3. **mongoose**
   - Descripción: Una biblioteca de modelado de objetos MongoDB para Node.js. Simplifica la interacción con la base de datos MongoDB y proporciona un esquema y validación de datos.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/mongoose)

4. **cors**
   - Descripción: Un middleware para Express que habilita el control de acceso a recursos cruzados (CORS) en el servidor. Permite que el servidor acepte peticiones de diferentes dominios o puertos.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/cors)

5. **dotenv**
   - Descripción: Un módulo para cargar variables de entorno desde un archivo .env. Es útil para gestionar configuraciones sensibles y diferentes entornos de desarrollo.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/dotenv)

6. **bcrypt**
   - Descripción: Una biblioteca para el hashing de contraseñas. Permite almacenar contraseñas de forma segura en la base de datos.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/bcrypt)

7. **express-validator**
   - Descripción: Un conjunto de middlewares para validar datos en las solicitudes HTTP en Express. Facilita la validación y sanitización de datos de entrada.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/express-validator)

8. **jsonwebtoken**
   - Descripción: Una implementación de JSON Web Tokens (JWT) para Node.js. Se utiliza para generar y verificar tokens de autenticación seguros.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/jsonwebtoken)

9. **cross-env**
   - Descripción: Un paquete para configurar variables de entorno de manera multiplataforma. Permite establecer variables de entorno en diferentes sistemas operativos.
   - Enlace: [Ver en npm](https://www.npmjs.com/package/cross-env)

## Instalación 
``` 
  npm run install-all
```
## Configuración de variables de entorno backend
``` 
- MONGO_DB_URL=tu base de datos mongoDB
- PORT=3001
- SECRET=secreto-de-tu-token-jwt
```

## Configuración de variables de entorno frontend
``` 
- NEXT_PUBLIC_API_KEY=
- NEXT_PUBLIC_API_TMDB=
- NEXT_PUBLIC_API_DETAILS=
- NEXT_PUBLIC_GENRE_API=
- NEXT_PUBLIC_API_IMAGE=
- NEXT_PUBLIC_API_IMAGE_BACKGROUND=
- NEXT_PUBLIC_API_SERVER=
```
## Uso
 ```
- backend: cd server | npm run dev
- frontend: cd client | npm run dev
```

## Preview
### Inicio
![Captura web_24-7-2023_16159_cine-y-series netlify app](https://github.com/brian432/cine-y-series/assets/80001602/c260aee0-160b-445d-a421-3c78b6580f43)

### Detalles
![Captura web_24-7-2023_161441_cine-y-series netlify app](https://github.com/brian432/cine-y-series/assets/80001602/942126a2-508d-4aa0-b7e1-2f06dcacd9a1)

### Autenticación
![Captura web_24-7-2023_161532_cine-y-series netlify app](https://github.com/brian432/cine-y-series/assets/80001602/dbf3a5e0-ff46-4973-8444-1b519c741755)
