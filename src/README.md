# portaldos

Guía de onboarding y filosofía de arquitectura.

- Todo lo de “core” es JS/TS puro, sin saber nada de Svelte.
- La carpeta ui/ depende de Svelte y Bootstrap.
- Los containers son los únicos que hablan con la lógica (servicios/stores del core).
- presentational/ recibe los datos por props y dispara eventos.
- Los stores viven en core, pero se importan en containers y componentes según necesidad.
- Tests separados por contexto: lógica en core, visual en ui, integrales globales en tests.


src/
├── core/                    # 💡 Lógica de negocio, modelos y servicios JS/TS puros
│   ├── services/            # APIs, fetch, lógica de negocio, gestión de datos
│   │   ├── userService.js
│   │   ├── productService.js
│   ├── models/              # Modelos y tipos de datos
│   │   ├── userModel.js
│   ├── stores/              # Svelte stores para comunicación y estado global
│   │   ├── userStore.js
│   ├── utils/               # Funciones y helpers reutilizables
│   │   ├── validators.js
│   ├── __tests__/           # Tests unitarios de lógica, sin dependencia de Svelte
│   │   ├── services.test.js
│   └── README.md            # Qué hace cada cosa, buenas prácticas, ejemplos
│
├── ui/                      # 🎨 Todo lo visual, enfocado a SvelteKit (o cualquier otro frontend)
│   ├── containers/          # Containers: arman la vista, conectan stores/servicios, componen presentacionales
│   │   ├── InicioContainer.svelte
│   │   ├── PerfilContainer.svelte
│   ├── presentational/      # Componentes puros, UI sin lógica, reciben props y disparan eventos
│   │   ├── Blog.svelte
│   │   ├── Navbar.svelte
│   │   ├── UfaCard.svelte
│   ├── utility/             # Cosas visuales reusables: loader, modal, toast, etc.
│   │   ├── Loader.svelte
│   ├── pages/               # Vistas/Pages SvelteKit, sólo estructura y layout, sin lógica de negocio
│   │   ├── +page.svelte
│   ├── styles/              # Estilos globales y temas (Bootstrap custom, variables CSS, etc)
│   │   ├── variables.css
│   │   ├── main.css
│   ├── __tests__/           # Tests de componentes (unitarios y de integración visual)
│   │   ├── Blog.test.js
│   └── README.md
│
├── assets/                  # Imágenes, fuentes, íconos, estáticos compartidos
│   └── logo.png
│
├── static/                  # Public estático, accesible vía URL raíz
│   └── robots.txt
│
├── routes/                  # SÓLO para SvelteKit: layouts y rutas principales, sin lógica de negocio
│   ├── +layout.svelte
│   ├── +page.svelte         # Importa containers, layout, etc.
│
├── tests/                   # E2E, integración cross, etc.
│   └── onboarding.test.js
│
├── App.svelte               # Entry point de Svelte (puede ser reemplazable por otro frontend)
├── main.js                  # Bootstrap de la app
└── README.md                # Guía de onboarding y filosofía de arquitectura

Todo lo de “core” es JS/TS puro, sin saber nada de Svelte.
Puede testearse solo, reusarse, y ser migrado a otro stack sin drama.

La carpeta ui/ depende de Svelte y Bootstrap.
Los containers son los únicos que hablan con la lógica (servicios/stores del core).

presentational/ recibe los datos por props y dispara eventos.
Pueden usarse también en otros proyectos (storybook, design system, etc).

Los stores viven en core, pero se importan en containers y componentes según necesidad.

Tests separados por contexto: lógica en core, visual en ui, integrales globales en tests.

