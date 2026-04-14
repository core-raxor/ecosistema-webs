---
name: Deuda técnica y bugs activos del ecosistema
description: Estado actualizado post-correcciones manuales. Riesgos, bugs funcionales y deuda técnica con estado actual. Última revisión: 2026-04-14.
type: project
originSessionId: fd541582-f2b3-419a-bb4d-608dbd58befb
---

## Estado post-correcciones manuales (revisión 2026-04-14)

### RESUELTO desde la auditoría inicial

**[RESUELTO] Redirect de home hardcodeado**

- Antes: `app/page.tsx` hacía `redirect("/nixen")`
- Ahora: `app/page.tsx` usa `getActiveBrand()` desde `@/lib/core/active-brand`
- La marca activa viene de `NEXT_PUBLIC_BRAND_SLUG` env var (validada con `isBrandKey()`)
- Modelo de deploy cambiado a multi-domain: cada instancia tiene su propio env

**[RESUELTO] `active-brand.ts` estaba vacío**

- Ahora: implementa `getActiveBrandKey()` y `getActiveBrand()`
- Lee `NEXT_PUBLIC_BRAND_SLUG`, valida con `isBrandKey()`, lanza Error si inválido o ausente
- Usado en `app/page.tsx` (home) y en `generateMetadata()`

---

### BUGS FUNCIONALES ACTIVOS

**[ACTIVO] `src/app/[brand]/gracias/page.tsx` — hardcodeado para NIXEN**

- Nombre "NIXEN", color `#7CFFB2`, fondo `#030405` hardcodeados
- Ruta dinámica `/[brand]/gracias` pero contenido estático
- Bug funcional: cualquier marca que redirija a su gracias page ve NIXEN

---

### VIOLACIONES DE ARQUITECTURA ACTIVAS

**[ACTIVO] `src/components/shared/background/GlobalBackground.tsx`**

- Variables: `isAelor`, `isDextor`, `isRaxor`, `isIxera`, `isNixen`, `isVaxen` (todas por slug)
- Lógica condicional por slug para fondos específicos de cada marca
- Agregar una nueva marca requiere modificar este archivo

**[ACTIVO] `src/components/brand/layout/BrandPageShell.tsx`**

- `const showScene = brand.slug !== "aelor"` hardcodeado (línea 13)
- AELOR no muestra BrandScene por excepción de slug, no por configuración

**[ACTIVO] `src/components/shared/background/ParticlesLayer.tsx`**

- `if (brand.slug !== "raxor") return` dentro del useEffect (línea 60)
- Partículas solo activas para RAXOR por slug check, no por configuración de tema

---

### RESIDUOS ESTRUCTURALES PENDIENTES

| Archivo/Directorio                                 | Estado                                       |
| -------------------------------------------------- | -------------------------------------------- |
| `src/lib/core/helpers.ts`                          | Vacío (1 línea)                              |
| `src/components/shared/background/AmbientGlow.tsx` | Stub — retorna null                          |
| `src/components/shared/ui/`                        | Directorio vacío (no verificado aún)         |
| `lucide-react` en package.json                     | Instalada, no usada en componentes           |
| `README.md`                                        | Texto de create-next-app + 2 líneas al final |

---

### NUEVA DEUDA INTRODUCIDA CON LOS CAMBIOS

**[NUEVO RIESGO] `NEXT_PUBLIC_BRAND_SLUG` sin `.env.example`**

- `active-brand.ts` lanza Error si la variable no existe o es inválida
- No hay `.env.example` que documente esta variable obligatoria
- Nuevo dev o agente IA sin contexto: la app rompe en frío sin mensaje claro

**[NUEVO RIESGO] Coexistencia de rutas `/` y `/[brand]/`**

- `app/page.tsx` renderiza la marca activa (por env)
- `app/[brand]/page.tsx` probablemente sigue existiendo (no verificado en esta revisión)
- Ambas rutas pueden estar activas simultáneamente — posible incoherencia si un deploy multi-domain también expone `/[brand]/` con marca incorrecta

---

### PLAN DE FASES ACTUALIZADO

```
2A → Limpieza estructural   (bajo riesgo)  — helpers.ts, AmbientGlow, lucide-react, ui/
2B → Bug gracias page       (bajo riesgo)  — hacer /[brand]/gracias dinámico con BrandConfig
2C → Refactor GlobalBg      (medio riesgo) — eliminar if(slug===) via backgroundConfig en tema
2D → showScene config        (bajo riesgo)  — campo showScene: boolean en BrandConfig/page
2E → ParticlesLayer config   (bajo riesgo)  — activar por visualSystem.particles, no por slug
2F → Blindaje operativo      (mínimo riesgo)— Husky, CI/CD, .env.example
2G → Documentación           (sin riesgo)   — CLAUDE.md, AGENTS.md, README real
2H → motion.intensity        (bajo riesgo)  — aplicar en Identity, Process, Services, Final, Contact
```

Criterio de completitud: agregar una nueva marca debe tocar exactamente 3 archivos
(BrandKey type + brand index.ts + registry.ts). Sin tocar ningún componente.
