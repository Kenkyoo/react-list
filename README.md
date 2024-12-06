React List App

Esta es una aplicación simple creada con React y Next.js para buscar elementos en una lista utilizando una barra de búsqueda.
Características

    Filtra elementos de una lista en tiempo real.
    Interfaz sencilla y minimalista usando TailwindCSS y DaisyUI.
    Construida con TypeScript para mayor seguridad en el código.

Tecnologías Utilizadas

    React 19.0.0 (versión experimental)
    Next.js 15.0.1
    TypeScript
    TailwindCSS y DaisyUI para estilos.
    ESLint para mantener un código limpio.

Instalación

Sigue estos pasos para clonar y ejecutar el proyecto:

    Clona este repositorio:

git clone https://github.com/Kenkyoo/react-list.git
cd react-list

Instala las dependencias:

npm install

Ejecuta el servidor de desarrollo:

    npm run dev

    Abre http://localhost:3000 en tu navegador.

Uso

    Ingresa un término en la barra de búsqueda.
    La lista mostrará los elementos que coincidan con tu búsqueda.
    Si no hay coincidencias, aparecerá el mensaje "No se encontraron resultados".

Estructura del Proyecto

react-list/
├── components/
│   ├── heading.tsx
│   ├── list.tsx
│   └── searchBar.tsx
├── data/
│   └── data.json
├── pages/
│   ├── index.tsx
├── styles/
│   └── globals.css
├── public/
├── package.json
└── README.md
