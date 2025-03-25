# Sky Connect

Sky Connect es una aplicación web diseñada para buscar y mostrar información sobre aeropuertos. La aplicación está construida utilizando tecnologías modernas y ofrece una experiencia de usuario completamente responsive con soporte para temas claros y oscuros.

## Tecnologías Usadas

- **Next.js**: Framework de React para aplicaciones web.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Lenguaje de programación que extiende JavaScript añadiendo tipos estáticos.
- **Zustand**: Biblioteca para el manejo del estado global.
- **MSW (Mock Service Worker)**: Herramienta para interceptar solicitudes de red y simular respuestas de API.
- **Jest**: Framework de pruebas para JavaScript.
- **React Testing Library**: Conjunto de utilidades para probar componentes de React.
- **TailwindCSS**: Control de estilos.
- **ESLint**: Linter.
- **Prettier**: Formato de Codigo.
- **Shadcn**: Libreria UI.
- **Framer Emotion**: Animaciones.

## API Usadas

- **API de Aeropuertos**: Endpoint `/api/airports` para obtener información sobre aeropuertos.

## Estructura general del Proyecto

```
sky-connect/
├── __tests__/                # Directorio de pruebas
│   ├── api/                  # Pruebas de integración para las APIs
│   │   └── airportsApi.test.tsx
│   ├── mock/                 # Mocks para las pruebas
│   │   ├── handlers.ts       # Manejadores de MSW para simular respuestas de API
│   │   └── server.ts         # Configuración del servidor MSW
│   └── setup.ts              # Configuración global para las pruebas
├── components/               # Componentes de React
│   ├── pages/                # Componentes de páginas
│   │   └── Home.tsx          # Componente de la página principal
│   ├── shared/               # Componentes compartidos
│   │   ├── searcher/         # Componente de búsqueda
│   │   │   └── Searcher.tsx
│   │   ├── loader/           # Componente de carga
│   │   │   └── Loader.tsx
│   │   ├── paginator/        # Componente de paginación
│   │   │   └── Paginator.tsx
│   │   ├── theme/            # Componente de tema
│   │   │   └── Theme.tsx
│   │   └── toaster/          # Componente de notificaciones
│   │       └── Toaster.tsx
├── providers/                # Proveedores de contextos
│   ├── store.tsx  /          # Store de la App
│   ├── theme.tsx  /          # Theme de la App
├── hooks/                    # Páginas de Next.js
│   ├── useAirports.ts/       # Hooks para separar logica de UI a nivel de contexto aeropuertos
├── store/                    # Páginas de Next.js
│   ├── airports.ts/          # Store de la App
├── pages/                    # Páginas de Next.js
│   ├── api/                  # Rutas de API de Next.js
│   │   └── airports
|   |         |__ route.ts       # Endpoint de la API de aeropuertos
```

## Descripción de los Principales Componentes

- **Home**: Componente principal que muestra la lista de aeropuertos y permite realizar búsquedas.
- **Searcher**: Componente de búsqueda que permite al usuario buscar aeropuertos en el store local.
- **Loader**: Componente de carga que se muestra mientras se obtienen los datos.
- **Paginator**: Componente de paginación para navegar entre diferentes páginas de resultados.
- **Theme**: Componente para cambiar entre temas claros y oscuros.
- **Toaster**: Componente para mostrar notificaciones.

## Vistas y Características Usadas de Next.js

- **Páginas**: La aplicación utiliza el sistema de páginas de Next.js para definir las rutas.
- **API Routes**: Se utilizan rutas de API de Next.js para manejar las solicitudes de datos.
- **SSR (Server-Side Rendering)**: Algunas páginas pueden utilizar SSR para mejorar el rendimiento y la SEO.

## Diseño Responsive

La aplicación está diseñada para ser completamente responsive, adaptándose a diferentes tamaños de pantalla y dispositivos. Se han utilizado técnicas de diseño responsive para asegurar una experiencia de usuario óptima en móviles, tabletas y escritorios.

## Control de Temas

La aplicación soporta temas claros y oscuros, permitiendo a los usuarios cambiar entre ellos según su preferencia. El estado del tema se maneja utilizando React Context.

## Uso de Zustand

Zustand se ha utilizado para manejar el estado global de la aplicación, incluyendo el estado del tema y los datos de los aeropuertos evitando consultas innecesarias a la API

## Nota Importante

El buscador de la aplicación solo busca en el store local. Esto significa que los resultados de búsqueda se limitan a los datos que ya han sido cargados en la aplicación y no realiza solicitudes adicionales a la API.

## Desplegar proyecto de manera local

```
1. git clone <dir_repo_remote>
2. npm i (instalacion de dependencias)
3. npm run test (ejecucion de pruebas unitarias y de integracion)
3. npm run dev (levantar servidor local de desarrollo)

```

## Algunos Snapshots!

<image src="./public/snapshots/image-1.png" alt="image1">
<image src="./public/snapshots/image-3.png" alt="image3">
<image src="./public/snapshots/image-2.png" alt="image2">
<image src="./public/snapshots/image-4.png" alt="image4">
