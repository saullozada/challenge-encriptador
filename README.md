# Challenge - Encritador de texto
El objetivo del proyecto es aplicar los conocimientos adquiridos durante las formaciones de **_Lógica de Programación con JavaScript_** y **_Principiante en Programacion HTML y CSS_**.

El proyecto se desarrollara de acuerdo con las especificaciones técnicas requeridas por **_Alura Latam_**.

Este **README** tiene como finalidad de documentar el proceso y pasos a seguir para su Analisis, Desarrollo y Finalización del proyecto.

Y con la ayuda de **_Git-GitHub_** llevar un registro de los cambios realizados al codigo. Permitiendo realizar mejoras al **_proyecto en el futuro_**.

_____
## Analisis del Proyecto.

En este paso debemos entrar al Figma del Proyecto para analizar su diseño, elementos y propiedades visuales

De manera general el proecto está dividido en 2 áreas principales con sus elementos que estos contienen y 1 área adicional para el pie de página del proyecto:

  - Encriptar
    - Logo de Alura
    - Área para Ingresar Texto
    - Términos
    - Área de botones

  - Área de Encriptado
    - Área de Texto Encriptado
    - Imagen informativa
    - Área de Mensajes
    - Boton de Copiado

  - Área de Pie de Página
    - Copyright y Autor

_____
## Creación del Proyecto.

### Estructura HTML y CSS
#### 1. Maquetado Inicial:
Como practica nueva trabajaremos a partir de **Mobile First** siendo la estructura inicial de los elementos HTML y aplicando los estilos CSS para su visualizacion.

Una vez finalizado daremos inicio con la maquetación **_Tablet_** y al final la maquetación **_Desktop_**.

#### 2. Creación del _Layout Principal_:

  1. Creamos el archivo **_index.html_** en nuestra carpeta principal del proyecto.
  1. Definiremos el **_1 contenedor padre_** con **_3 contenedores hijos_**. La estructura HTML es:

  ```html
    <body>
        <div class="contenedor">
            <div id="encriptar" class="contenedor-encriptar">Área Encriptar</div>
            <div id="encriptado" class="contenedor-encriptado">Área Encriptado</div>
            <div class="contenedor-pie">Pie de Pagina</div>
        </div>
    </body>
  ```

#### 3. Estilos del _Layput Principal_:

  1. Crear la carpeta **_CSS_** dentro de la carpeta principal.
  1. Crear el archivo de estilos **_style.css_**
  1. Con la forma **_Mobile First_** trabajaremos con un layout con `width: 375px;` y `height: 933px;` 
  1. En este proyecto utilizaremos `display: grid;` para el contenedor princiapl facilitando el diseño responsivo:

    ```css
    .contenedor { 
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 700px 193px 40px;
      height: 933px;
      grid-template-areas: 
        "uno"
        "dos"
        "tres";
    }
    ```

  5. Los **Contenedores Hijos** utilizaran `grid-area: nombre` permitiendo identificarlas para trabajar con `display: grid;`:
  
    ```css
      .contenedor-encriptar {
        background: lightgray;
        grid-area: uno;
        position: relative;
      }
      .contenedor-encriptado {
        background: lightpink;
        grid-area: dos;
        position: relative;
      }
      .contenedor-pie {
        background: lightskyblue; 
        grid-area: tres;
        position: relative;
      }
    ```
  6. En los **Contenedores Hijos** es importante definir un **_background: color;_** temporal como ayuda visual hasta finalizar el maquetado.

#### 4. Definición de _@Media Querys_:
  1. Para nuestro diseño responsivo definiremos los **_@media-querys_** para la versión Tablet y Desktop:

  1. Maquetado para Tablet

      ```css
        @media (width > 375px) {
        .contenedor {
            grid-template-rows: 83vh 14vh 3vh;
            height: 1174px;
          }
        }
       ```

  1. Maquetado para Desktop

       ```css
        @media (width > 768px) {
          .contenedor {
            grid-template-columns: 1fr 440px;
            grid-template-rows: 97vh 3vh;
            height: 1024px;
            grid-template-areas: 
                "uno dos"
                "tres tres";
          }
        }
       ```
  1. Definidos los **_@media-querys_** concluimos con la definicion del **_Layout Principal_**.

_____
## Contenido del Proyecto.

### Estructura HTML
#### 1. Elementos HTML