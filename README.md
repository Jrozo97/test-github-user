# GitHub User Finder

Este proyecto es una aplicación web que permite buscar usuarios de GitHub y ver información detallada sobre ellos, incluyendo una lista de sus repositorios. La aplicación utiliza la API de GitHub para obtener los datos.

## Características

- Buscar usuarios de GitHub por nombre de usuario
- Ver detalles del usuario, como nombre, biografía, cantidad de seguidores y seguidos
- Listar los repositorios del usuario
- Navegar a cada repositorio para ver más detalles

## Tecnologías utilizadas

- React.js
- TypeScript
- Tanstack Query (para el manejo de datos y caché)
- Jest (para pruebas unitarias)
- Figma (para el diseño de la interfaz de usuario)

## Instalación

1. Clona este repositorio en tu máquina local:
> git clone https://github.com/Jrozo97/test-github-user.git

2. Navega al directorio del proyecto:
> cd github-user-finder

3. Instala las dependencias:
> npm install

4. Inicia la aplicación en modo de desarrollo:
> npm run start

Esto abrirá la aplicación en `http://localhost:3000` en tu navegador.

## Pruebas

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
> npm test

## Diseño de la interfaz de usuario

El diseño de la interfaz de usuario se creó utilizando Figma. Puedes ver el diseño [aqui](https://pages.github.com/)

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request
