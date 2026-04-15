# Ecosistema Webs — NextJS

Sistema multi-brand construido en Next.js. Seis marcas comparten una base de componentes, tipos y lógica. Cada marca se despliega en su propio dominio como una instancia independiente.

---

## Arquitectura en 30 segundos

```
1 repo → N marcas → N deploys → N dominios
```

La marca activa se define con `NEXT_PUBLIC_BRAND_SLUG` al hacer el build. El mismo codebase produce un sitio diferente según qué marca esté configurada. No hay routing por slug en producción — la raíz `/` ya es la marca correcta.

```
nixen.co   → build con NEXT_PUBLIC_BRAND_SLUG=nixen
aelor.co   → build con NEXT_PUBLIC_BRAND_SLUG=aelor
raxor.co   → build con NEXT_PUBLIC_BRAND_SLUG=raxor
```

La arquitectura interna es por capas: los datos de marca son configuración pura, los componentes leen esa configuración, y ESLint hace cumplir que las capas no se mezclen.

---

## Stack

| Tecnología    | Versión | Rol                                           |
| ------------- | ------- | --------------------------------------------- |
| Next.js       | 16.2.1  | Framework (App Router)                        |
| React         | 19      | UI                                            |
| TypeScript    | 5       | Lenguaje (strict mode completo)               |
| Tailwind CSS  | 4       | Estilos (con CSS custom properties por marca) |
| Framer Motion | 12      | Animaciones                                   |
| ESLint        | 9       | Linting + enforcement de arquitectura         |
| Prettier      | 3       | Formato de código                             |

---

## Primeros pasos

### Variables de entorno requeridas

Copia `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

| Variable                 | Obligatoria | Descripción                                                           |
| ------------------------ | ----------- | --------------------------------------------------------------------- |
| `NEXT_PUBLIC_BRAND_SLUG` | **Sí**      | Slug de la marca activa. La app no arranca sin este valor.            |
| `NEXT_PUBLIC_SITE_URL`   | No          | URL canónica del dominio (para SEO). Default: `http://localhost:3001` |

Valores válidos para `NEXT_PUBLIC_BRAND_SLUG`: `nixen`, `aelor`, `dextor`, `raxor`, `ixera`, `vaxen`

### Instalación y arranque

```bash
npm install
npm run dev       # http://localhost:3001
```

---

## Scripts disponibles

| Script              | Descripción                                        |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo en puerto 3001              |
| `npm run build`     | Build de producción                                |
| `npm run start`     | Servidor de producción en puerto 3001              |
| `npm run lint`      | ESLint sobre todo el proyecto                      |
| `npm run typecheck` | Verificación de tipos sin build                    |
| `npm run format`    | Formatea con Prettier                              |
| `npm run check`     | Gate de calidad completo: lint + typecheck + build |

Antes de cualquier commit, ejecutar `npm run check`.

---

## Modelo multi-brand por dominio

### Cómo funciona

Cada marca es un objeto de configuración en `src/lib/brands/[slug]/index.ts`. Este objeto define todo lo necesario para renderizar el sitio: contenido, tema visual, SEO, estructura de página y sistema de partículas y fondos.

En tiempo de build, `getActiveBrand()` lee `NEXT_PUBLIC_BRAND_SLUG`, valida que sea una marca registrada, y devuelve su configuración completa. A partir de ahí, todos los componentes reciben la marca como prop y renderizan en consecuencia.

No hay lógica condicional por slug en los componentes. Un componente nuevo nunca necesita saber "si es NIXEN, hacer X; si es AELOR, hacer Y". Esa diferenciación va en la configuración de la marca.

### Rutas disponibles en cada deploy

```
/           → Página principal de la marca activa
/gracias    → Página de confirmación (no indexada por SEO)
/sitemap.xml
/robots.txt
```

---

## Estructura del repositorio

```
src/
├── app/                          # Routing y páginas (Next.js App Router)
│   ├── page.tsx                  # Home — renderiza la marca activa
│   ├── gracias/page.tsx          # Confirmación — usa la marca activa
│   ├── layout.tsx                # Layout raíz con fuentes
│   ├── globals.css               # Estilos globales + CSS variables base
│   ├── sitemap.ts                # Sitemap dinámico por marca
│   └── robots.ts                 # robots.txt
│
├── components/
│   ├── brand/                    # Componentes específicos de marca
│   │   ├── layout/
│   │   │   └── BrandPageShell.tsx    # Wrapper principal: aplica tema, fondo y escena
│   │   ├── scene/
│   │   │   └── BrandScene.tsx        # Sistema visual (formas, glow, capas)
│   │   └── sections/
│   │       ├── registry.tsx          # Mapa de secciones disponibles
│   │       ├── Hero.tsx
│   │       ├── Identity.tsx
│   │       ├── Process.tsx
│   │       ├── Services.tsx
│   │       ├── Final.tsx
│   │       └── ContactSection.tsx
│   │
│   └── shared/                   # Componentes reutilizables (agnósticos a la marca)
│       ├── background/
│       │   ├── GlobalBackground.tsx  # Fondo: lee backgroundOverlay del tema
│       │   └── ParticlesLayer.tsx    # Canvas de partículas: activado por config del tema
│       └── layout/
│           └── SectionContainer.tsx  # Wrapper de sección con padding responsive
│
└── lib/
    ├── types/                    # Tipos TypeScript (capa hoja — sin dependencias)
    │   ├── brand.ts              # BrandConfig, BrandKey
    │   ├── theme.ts              # BrandTheme, BrandBackgroundOverlay
    │   ├── content.ts            # Tipos de contenido por sección
    │   ├── sections.ts           # BrandSectionKey, BrandPageConfig
    │   └── ui.ts                 # SectionVariant, BrandUI
    │
    ├── brands/                   # Configuraciones de marca (datos puros)
    │   ├── registry.ts           # Registro central: brands map + helpers
    │   ├── nixen/index.ts
    │   ├── aelor/index.ts
    │   ├── dextor/index.ts
    │   ├── raxor/index.ts
    │   ├── ixera/index.ts
    │   └── vaxen/index.ts
    │
    └── core/                     # Utilidades de negocio
        ├── active-brand.ts       # getActiveBrand() — resuelve la marca desde env
        ├── brand-resolver.ts     # getBrandOrThrow(), getBrandOrNull()
        ├── brand-metadata.ts     # buildBrandMetadata() — genera metadata SEO
        ├── theme-vars.ts         # getBrandCssVars() — convierte tema a CSS variables
        └── theme.ts              # globalTheme — constantes de espaciado y escala base
```

---

## Cómo agregar una nueva marca

Solo se necesitan 3 archivos. No se toca ningún componente.

**1. Añadir el slug al tipo `BrandKey`**

```typescript
// src/lib/types/brand.ts
type BrandKey = "aelor" | "dextor" | "raxor" | "ixera" | "nixen" | "vaxen" | "newbrand";
```

**2. Crear el brand config**

```bash
src/lib/brands/newbrand/index.ts
```

Copiar `src/lib/brands/nixen/index.ts` como base. El archivo debe exportar el objeto con `satisfies BrandConfig`. La configuración tiene 6 capas:

- `content` — todo el copy (hero, identity, process, services, final, contact, footer)
- `links` — CTAs y redes sociales
- `assets` — logo, imágenes (opcional)
- `theme` — colores, tipografía, efectos, `backgroundOverlay`, `visualSystem`
- `ui` — variantes de sección y `motion.intensity`
- `page` — array de secciones y `showScene` (si la marca no debe mostrar la escena visual)
- `seo` — title, description, keywords, `siteUrl`

**3. Registrar en el registry**

```typescript
// src/lib/brands/registry.ts
import { newbrand } from "./newbrand";

export const brands: BrandsMap = {
  aelor,
  dextor,
  ixera,
  nixen,
  raxor,
  vaxen,
  newbrand,
};
```

**Verificar:** `npm run check` debe pasar sin errores.

---

## Cómo hacer deploy por marca

Cada marca es un deploy separado con su propio conjunto de variables de entorno.

```bash
# Build para NIXEN
NEXT_PUBLIC_BRAND_SLUG=nixen NEXT_PUBLIC_SITE_URL=https://nixen.co npm run build

# Build para AELOR
NEXT_PUBLIC_BRAND_SLUG=aelor NEXT_PUBLIC_SITE_URL=https://aelor.co npm run build
```

En plataformas como Vercel, Railway o similares: crear un proyecto por marca y configurar las variables de entorno en el panel de la plataforma. El codebase es el mismo para todos los deploys.
