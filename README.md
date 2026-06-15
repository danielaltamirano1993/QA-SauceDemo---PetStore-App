
# Tecnologías utilizadas
Cypress: Framework principal de automatización.

JavaScript: Lenguaje base para el desarrollo de los scripts.

Node.js: Entorno de ejecución.

# Estructura del proyecto

```js
/
├── cypress/
│   ├── e2e/              # Pruebas de flujo de compra (SauceDemo)
│   ├── api/              # Pruebas de servicios REST (PetStore)
│   ├── fixtures/         # Datos de prueba (JSON)
│   └── support/          # Configuración y comandos personalizados
├── cypress.config.js     # Configuración del proyecto
├── package.json          # Dependencias y scripts de ejecución
├── README.md             # Este archivo
└── conclusiones.txt      # Análisis de resultados
```

# Instrucciones de ejecución

Requisitos previos:

Tener instalado Node.js (LTS).

Instalación:
Abre una terminal en la raíz del proyecto y ejecuta:

```js
npm install
```


# Ejecutar pruebas:

Modo Interactivo (Recomendado para ver resultados):


```js
npx cypress open
```

Modo Headless (Ejecución rápida):


```js
npx cypress run
```