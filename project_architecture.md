---
name: Arquitectura del ecosistema multi-brand
description: Estructura técnica, capas, marcas activas, modelo de deploy y decisiones arquitectónicas. Última revisión: 2026-04-14.
type: project
originSessionId: fd541582-f2b3-419a-bb4d-608dbd58befb
---

Proyecto Next.js 16.2.1 (App Router) multi-brand con 6 marcas: NIXEN, AELOR, DEXTOR, RAXOR, IXERA, VAXEN.

**Why:** Sistema empresarial modular donde cada marca comparte base estructural pero tiene temas, contenido y SEO independientes. Modelo de deploy: cada dominio/instancia es un deploy separado con su propia variable de entorno `NEXT_PUBLIC_BRAND_SLUG`.

## Modelo de deploy (actualizado)

El sistema usa un modelo multi-domain donde:

- Cada instancia del app tiene `NEXT_PUBLIC_BRAND_SLUG` configurada en su `.env`
- La ruta raíz `/` renderiza la marca activa (no redirige a `/[brand]`)
- `getActiveBrand()` en `lib/core/active-brand.ts` es el punto de entrada de la marca
- También existe ruta dinámica `/[brand]/` (estado: coexistencia a verificar)

## Jerarquía de capas (de hoja a raíz)

```
lib/types/ (hoja, sin deps)
  ↑
lib/brands/ (solo importa de types)
lib/core/  (solo importa de types y brands)
  ↑
components/shared/ (solo importa de types)
components/brand/  (importa de shared, types, core)
  ↑
app/ (importa de todo)
```

ESLint en `eslint.config.mjs` hace cumplir esta jerarquía con `no-restricted-imports`.

## Path alias único

`@/*` → `./src/*` (definido en tsconfig.json)

## Variables de entorno

| Variable                 | Obligatoria | Uso                                                                  |
| ------------------------ | ----------- | -------------------------------------------------------------------- |
| `NEXT_PUBLIC_BRAND_SLUG` | SÍ          | Determina la marca activa. Si falta, `getActiveBrand()` lanza Error. |
| `NEXT_PUBLIC_SITE_URL`   | No          | URL canónica para SEO. Default: `http://localhost:3001`              |

## Archivos críticos

- `src/lib/types/brand.ts` — BrandConfig, BrandKey (tipo unión manual de las 6 marcas)
- `src/lib/brands/registry.ts` — registro central, getBrandBySlug, getAllBrands, isBrandKey
- `src/lib/core/active-brand.ts` — getActiveBrand(), getActiveBrandKey() (lee NEXT_PUBLIC_BRAND_SLUG)
- `src/lib/core/brand-resolver.ts` — getBrandOrThrow, getBrandOrNull (para rutas dinámicas [brand])
- `src/lib/core/theme-vars.ts` — getBrandCssVars() convierte BrandTheme a CSS custom properties
- `src/components/brand/sections/registry.tsx` — registro dinámico de secciones
- `src/components/brand/layout/BrandPageShell.tsx` — layout wrapper principal
- `eslint.config.mjs` — reglas de arquitectura (no modificar sin aprobación)

## Tecnologías

- TypeScript strict (noUncheckedIndexedAccess, exactOptionalPropertyTypes)
- Tailwind CSS v4 con @tailwindcss/postcss
- CSS Variables para temas dinámicos por marca
- Framer Motion para animaciones
- Puerto: 3001 (dev y prod)
