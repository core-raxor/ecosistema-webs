# AGENTS.MD — Ecosistema Webs NextJS

Guía operativa para agentes IA que trabajan en este repositorio.
Léela completa antes de hacer cualquier cambio.

---

## 1. Qué es este repo

Sistema multi-brand construido en Next.js 16. Seis marcas comparten una base de componentes, tipos y lógica, pero cada marca tiene su propio contenido, tema visual, SEO y configuración de página.

El modelo de deploy es **1 dominio = 1 marca activa**. No hay routing por marca en las URLs — la marca se define en la variable de entorno `NEXT_PUBLIC_BRAND_SLUG` al momento del build.

---

## 2. Modelo de deploy

Cada marca vive en su propio dominio con su propio deploy:

```
nixen.co   → NEXT_PUBLIC_BRAND_SLUG=nixen   → build → deploy
aelor.co   → NEXT_PUBLIC_BRAND_SLUG=aelor   → build → deploy
raxor.co   → NEXT_PUBLIC_BRAND_SLUG=raxor   → build → deploy
```

La ruta raíz `/` renderiza la marca activa. No existen rutas `/[brand]`.

---

## 3. Arquitectura de capas

Las capas van de más pura (hoja) a más permisiva (raíz). Las dependencias solo fluyen hacia abajo.

```
┌─────────────────────────────────────────┐
│  app/                                   │  ← puede importar desde todo
├─────────────────────────────────────────┤
│  components/brand/                      │  ← puede importar desde shared, core, types
├─────────────────────────────────────────┤
│  components/shared/                     │  ← puede importar desde core y types
├─────────────────────────────────────────┤
│  lib/core/                              │  ← solo puede importar desde types y brands
├─────────────────────────────────────────┤
│  lib/brands/                            │  ← solo puede importar desde types
├─────────────────────────────────────────┤
│  lib/types/                             │  ← HOJA. No importa nada interno
└─────────────────────────────────────────┘
```

ESLint hace cumplir estas restricciones via `no-restricted-imports` en `eslint.config.mjs`.
**No modifiques ese archivo sin aprobación explícita.**

---

## 4. Reglas de import por capa

| Capa                 | Puede importar de                               | No puede importar de               |
| -------------------- | ----------------------------------------------- | ---------------------------------- |
| `lib/types/`         | nada interno                                    | todo lo demás                      |
| `lib/brands/`        | `lib/types/`                                    | `lib/core/`, `components/`, `app/` |
| `lib/core/`          | `lib/types/`, `lib/brands/`                     | `components/`, `app/`              |
| `components/shared/` | `lib/types/`, `lib/core/`                       | `components/brand/`, `app/`        |
| `components/brand/`  | `components/shared/`, `lib/types/`, `lib/core/` | `app/`                             |
| `app/`               | todo                                            | —                                  |

---

## 5. Cómo agregar una nueva marca

Requiere exactamente **3 archivos**. No se debe tocar ningún componente.

### Paso 1 — Actualizar el tipo `BrandKey`

```ts
type BrandKey = "aelor" | "dextor" | "raxor" | "ixera" | "nixen" | "vaxen" | "newbrand";
```

### Paso 2 — Crear el brand config

Ruta:

```
src/lib/brands/newbrand/index.ts
```

Estructura obligatoria:

1. content
2. links & assets
3. theme
4. ui
5. page
6. seo

```ts
export const newbrand = { ... } satisfies BrandConfig;
```

### Paso 3 — Registrar en el registry

```ts
export const brands: BrandsMap = {
  ...,
  newbrand,
};
```

### Checklist obligatorio

- [ ] `BrandKey` actualizado
- [ ] Brand file completo
- [ ] Registro actualizado
- [ ] `npm run check` pasa

---

## 6. Cómo agregar una nueva sección

Orden obligatorio:

1. `src/lib/types/sections.ts`
2. `src/lib/types/content.ts`
3. `src/components/brand/sections/NewSection.tsx`
4. `src/components/brand/sections/registry.tsx`
5. actualizar todos los brand configs

---

## 7. Archivos de alto impacto

| Archivo                    | Riesgo                     |
| -------------------------- | -------------------------- |
| `lib/types/brand.ts`       | rompe todos los brands     |
| `lib/types/theme.ts`       | rompe sistema visual       |
| `lib/brands/registry.ts`   | rompe resolución de marcas |
| `lib/core/active-brand.ts` | rompe build completo       |
| `lib/core/theme-vars.ts`   | rompe estilos              |
| `eslint.config.mjs`        | rompe arquitectura         |

---

## 8. Reglas obligatorias (NO negociables)

### R1 — Leer antes de editar

Nunca editar sin leer el archivo completo.

---

### R2 — No hardcodear slugs en shared

❌ Incorrecto:

```ts
if (brand.slug === "aelor")
```

✔️ Correcto:
→ usar configuración en BrandConfig

---

### R3 — Shared no contiene lógica de marca

Si es específico de una marca:

- va en `components/brand/`
- o en `lib/brands/`

---

### R4 — Respetar capas

No romper imports entre capas.
Verificar ESLint antes de importar.

---

### R5 — npm run check obligatorio

```bash
npm run check
```

---

### R6 — No crear archivos en shared sin justificación

---

### R7 — Cambios en BrandConfig afectan todos los brands

---

### R8 — No modificar eslint.config.mjs sin aprobación

---

## 9. Checklist antes de cerrar cambios

```
[ ] npm run check pasa
[ ] No hay imports ilegales
[ ] No hay brand.slug en shared
[ ] No hay hardcodes de marca
[ ] Tipos globales revisados si fueron modificados
```

---

## 10. Variables de entorno

| Variable                 | Obligatoria | Descripción                                       |
| ------------------------ | ----------- | ------------------------------------------------- |
| `NEXT_PUBLIC_BRAND_SLUG` | **SÍ**      | Marca activa (rompe build si falta o es inválida) |
| `NEXT_PUBLIC_SITE_URL`   | No          | URL base (fallback a localhost)                   |

---

## 11. Flujo de trabajo para agentes IA

### Antes de editar:

1. Identificar capa
2. Leer archivo completo
3. Verificar imports permitidos

### Después:

```bash
npm run check
```

---

## 12. Reglas mentales clave

- La lógica de marca vive en `lib/brands/`
- Los componentes renderizan, no deciden
- `shared` = reutilizable, nunca específico
- Si necesitas `if (slug)` → estás rompiendo arquitectura
