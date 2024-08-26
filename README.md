![Logo de NebulaWear](client/src/assets/logos/nebula_logo.png)

# Nebula Wear


## Introducción:

**Nebula Wear** es un proyecto de comercio electrónico desarrollado con el objetivo de demostrar habilidades avanzadas en desarrollo web y gestión de proyectos tecnológicos. Liderado por un equipo multidisciplinario de desarrolladores front-end, back-end y diseñadores UX/UI.

La plataforma esta siendo diseñada para ser robusta, escalable y completa, abarcando desde la arquitectura del sistema hasta la experiencia del usuario. **Nebula Wear** no es solo una tienda en línea, sino una **prueba concreta** de la capacidad de cada integrante del equipo para enfrentar desafíos tecnológicos complejos y entregar soluciones de alta calidad.

Este proyecto refleja el compromiso de cada miembro del equipo con la excelencia y la innovación, y sirve como una demostración de su habilidad para trabajar en un entorno colaborativo, cumpliendo objetivos y superando expectativas.
## Tabla de contenido

 - [Instalación](#instalacion)
 - [Uso](#use)
 - [Caracteristicas](#caracteristica)
 - [Dependencias](#dependencia)
 - 


## Instalacion {#instalacion} 

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

bash
```
git clone https://github.com/Jesusantiago/NebulaWear.git
cd NebulaWear
```

Adentro encontrará dos carpetas:

* client - Front-End
* server - Back-End

Para correr el proyecto completo deberá:

bash
```
cd client
npm install

cd ..
cd server
npm install
```

Ó **recomandada**

abrir dos terminales y ejecutar en cada una lo siguiente:

bash - primera terminal
```
cd client
npm install
```

bash - segunda terminal
```
cd server
npm install
```

## Uso

Una vez teniendo todo instalado y si seguiste nuestro consejo de abrír dos terminales para hacer las intalaciones, ahora proceseremos a levantar los servidores.

bash - primera terminal
```
npm run dev
```

bash - secunda terminal
```
npm run dev
```


## Caracteristicas {#caracteristica}

* Autenticación de Usuarios con Firebase: Inicio de sesión y registro utilizando Google.

* Gestión de Productos: Funcionalidad para añadir, editar y eliminar productos.

* Gestion de usuario: Funcionalidad para editar tus datos, añadir a favoritos, realizar comprar, dejar reseñas en productos comprados y cambiar de contraseña.

* Carrito de Compras: Capacidad para añadir y eliminar productos al carrito y proceder al pago.

* Pasarela de Pago: (Integración futura con servicios de pago como Stripe o PayPal).

* Panel de Administración: Gestión de productos, usuarios y pedidos por parte de los administradores.

* Interfaz Moderna: Utilización de Material UI para una experiencia de usuario visualmente atractiva y consistente.
## Tech Stack

* **Client:** 
  - Vite
  - React
  - JavaScript
  - Material UI


* **Server:**
  - Node
  - Express

* **Base de datos:**
    - SQL

* **Autenticación:**
  - Firebase Google


## Authors

- [@Jesusantiago](https://www.github.com/Jesusantiago) Lider del proyecto - Front-End
- [@Gonzalo](https://www.github.com/Gonchalo1) Front-End
- [@Newman](https://www.github.com/Newman-a) Front-End
- [@Sonny](https://www.github.com/spimentel1201) Back-End
- [@Dennis](https://www.github.com/Nullim) Back-End
