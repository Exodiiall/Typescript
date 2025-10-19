# Taller TypeScript – Series de TV

## Descripción
Este proyecto es una aplicación web desarrollada en TypeScript que muestra una lista de series de televisión con información básica como canal, número de temporadas y descripción.  
Al seleccionar una serie en la tabla, se despliega un panel con más detalles, incluyendo la imagen, una sinopsis y un enlace al sitio oficial.

## Tecnologías utilizadas
- TypeScript  
- HTML5  
- Bootstrap 5  
- Esbuild (para compilación y empaquetado)

## Estructura del proyecto
    taller-typescript/
    ├── node_modules/
    ├── bundle.js
    ├── data.ts
    ├── index.html
    ├── main.ts
    ├── package.json
    ├── package-lock.json
    ├── Serie.ts
    ├── tsconfig.json

## Instrucciones de ejecución

1. **Instalar dependencias**
   ```bash
   npm install
2. **Compilar el proyecto**
    ```bash
    npm run build
Esto genera el archivo bundle.js a partir del código TypeScript.

3. **Visualizar la aplicación**

  - Opción 1: Abrir directamente index.html en el navegador.
  - Opción 2: Ejecutar un servidor local:

    ```bash

    npm run start
Luego abrir la URL que muestra la consola (por ejemplo, http://127.0.0.1:8080).

## Funcionamiento
- La tabla se genera dinámicamente a partir del arreglo de objetos series definido en data.ts.
- Se calcula y muestra el promedio de temporadas de todas las series.
- Al hacer clic en una fila de la tabla, se actualiza el panel lateral con la imagen, descripción y enlace correspondiente a la serie seleccionada.

## Creditos

El codigo fue elaborado por:
**Jose Luis Almonacid Peñaranda** con ayuda de los talleres publicados por la **Universidad de los Andes Colombia** y **GPT-5** como asistente
