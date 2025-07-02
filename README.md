# portaldos

Este proyecto está organizado siguiendo una arquitectura desacoplada y escalable, ideal para aplicaciones modernas con SvelteKit como frontend y cualquier backend (por ejemplo, Laravel) como proveedor de APIs. A continuación se detalla la lógica y el propósito de cada carpeta principal:

## Estructura general

```
src/
├── core/           # Lógica de negocio, modelos y servicios JS/TS puros
├── ui/             # Todo lo visual, enfocado a SvelteKit
├── assets/         # Imágenes, fuentes, íconos, estáticos compartidos
├── static/         # Archivos públicos accesibles desde la raíz del sitio
├── routes/         # Layouts y rutas principales de SvelteKit
├── tests/          # Pruebas de integración y E2E
├── App.svelte      # Entry point de Svelte
├── main.js         # Bootstrap de la app
└── README.md       # Guía y filosofía de arquitectura
```

## Desglose de carpetas y lógica

### `src/core/`
- **Propósito:** Contiene toda la lógica de negocio, modelos de datos, servicios para APIs y stores globales. No depende de Svelte ni de la UI, por lo que puede ser testeado y migrado fácilmente a otros stacks.
- **Subcarpetas:**
  - `services/`: Funciones para interactuar con APIs y manejar lógica de negocio (ej: userService.js).
  - `models/`: Modelos y tipos de datos (ej: userModel.js).
  - `stores/`: Svelte stores para estado global (ej: userStore.js).
  - `utils/`: Helpers y utilidades reutilizables (ej: validators.js).
  - `__tests__/`: Tests unitarios de lógica, sin dependencia de Svelte.

### `src/ui/`
- **Propósito:** Todo lo visual y relacionado a SvelteKit. Aquí se encuentran los componentes, containers, estilos y tests visuales.
- **Subcarpetas:**
  - `containers/`: Componentes Svelte que conectan la lógica del core con la UI, orquestan datos y componen presentacionales.
  - `presentational/`: Componentes Svelte puros, solo UI, reciben props y disparan eventos.
  - `utility/`: Componentes visuales reutilizables (loaders, modals, etc).
  - `pages/`: Vistas principales de la app, solo estructura y layout.
  - `styles/`: Estilos globales, variables y temas (incluye Bootstrap).
  - `__tests__/`: Tests unitarios y de integración visual para la UI.

### `src/assets/`
- **Propósito:** Imágenes, íconos, fuentes y archivos estáticos compartidos por toda la app.

### `src/static/`
- **Propósito:** Archivos públicos accesibles desde la raíz del sitio (ej: robots.txt, favicon, etc).

### `src/routes/`
- **Propósito:** Solo para SvelteKit. Define layouts y rutas principales, sin lógica de negocio.

### `src/tests/`
- **Propósito:** Pruebas de integración end-to-end y flujos completos de usuario.

### Archivos raíz
- **App.svelte:** Entry point de la app Svelte.
- **main.js:** Bootstrap de la app, donde se inicializa Svelte y se importan estilos globales.
- **README.md:** Esta guía y explicación de la arquitectura.

---

## Filosofía y buenas prácticas
- Todo lo de “core” es JS/TS puro, sin saber nada de Svelte ni de la UI.
- La carpeta `ui/` depende de Svelte y Bootstrap.
- Los containers son el único puente entre la lógica (core) y la UI.
- Los componentes presentacionales reciben datos por props y disparan eventos, sin lógica de negocio.
- Los stores viven en core, pero se importan en containers y componentes según necesidad.
- Los tests están separados por contexto: lógica en core, visual en ui, integrales globales en tests.

---

## Ejemplo de flujo
1. Un container en `ui/containers/` importa un servicio de `core/services/` y un store de `core/stores/`.
2. El container obtiene datos del backend (por ejemplo, Laravel) usando el servicio.
3. El container pasa los datos a componentes presentacionales en `ui/presentational/`.
4. Los componentes presentacionales muestran la UI y disparan eventos según interacción del usuario.
5. Los stores permiten compartir estado global entre diferentes partes de la app.

---

Esta organización permite escalar el proyecto, facilitar el testing y la migración a otros stacks, y mantener una separación clara entre lógica y presentación.

# Documentación original de SvelteKit

## sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
