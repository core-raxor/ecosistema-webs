# CLAUDE.MD — Instrucciones de operación para Claude Code

Este archivo contiene las instrucciones específicas para trabajar en este repositorio de forma segura y consistente.

---

## 1. Contexto del proyecto

Este es un ecosistema multi-brand en Next.js 16. Seis marcas comparten una base de componentes y lógica. El modelo de deploy es 1 dominio = 1 marca activa, resuelta via `NEXT_PUBLIC_BRAND_SLUG` en el build.

La arquitectura tiene capas con dependencias unidireccionales, enforced por ESLint. El sistema compila estrictamente con TypeScript en modo `strict` completo.

Lee `AGENTS.md` para el mapa completo de capas, reglas de import y checklists operativos.

---

## 2. Antes de hacer cualquier cambio

**Siempre lee estos archivos primero** según el tipo de tarea:

| Tarea                            | Archivos a leer                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| Cambiar lógica de marca          | El brand file en `lib/brands/[slug]/index.ts` + `lib/types/brand.ts`                 |
| Cambiar un componente de sección | El archivo del componente + `lib/types/content.ts` para los tipos de contenido       |
| Cambiar el sistema visual        | `lib/types/theme.ts` + el brand file afectado                                        |
| Agregar una marca                | `lib/types/brand.ts` + `lib/brands/registry.ts` + un brand existente como referencia |
| Cambiar rutas o páginas          | `app/page.tsx` + `lib/core/active-brand.ts` + `app/sitemap.ts`                       |
| Tocar cualquier tipo global      | Todos los archivos en `lib/brands/*/index.ts` — son 6                                |

**Preguntas que debes hacerte antes de editar:**

- ¿En qué capa vive este archivo?
- ¿Qué imports están permitidos desde esa capa?
- ¿Cuántos otros archivos dependen de lo que voy a cambiar?
- ¿Hay una forma de hacer este cambio solo en la configuración del brand, sin tocar componentes?

---

## 3. Cómo trabajar por fases

Para tareas que tocan múltiples capas, trabajar en este orden:

```
1. lib/types/     → cambios de tipos primero
2. lib/brands/    → actualizar brand configs que implementan esos tipos
3. lib/core/      → lógica de utilidad si aplica
4. components/    → componentes al final, nunca primero
5. app/           → routing y páginas al final
```

Entre cada fase que modifique tipos o lógica crítica, ejecutar `npm run typecheck` para confirmar que no hay roturas antes de continuar. Ejecutar `npm run check` al terminar cada fase completa.

---

## 4. Archivos que requieren cuidado extra

### `src/lib/types/brand.ts`

Define `BrandConfig` y `BrandKey`. Cambiar la firma de `BrandConfig` rompe los 6 brand files simultáneamente. Añadir un campo **requerido** sin valor por defecto es un error de compilación en cascada. Si se añade un campo nuevo, debe ser opcional (`?`) o todos los brand files deben actualizarse en el mismo cambio.

### `src/lib/types/theme.ts`

Define `BrandTheme`. Todos los brand configs implementan esta interfaz. Mismo riesgo que `brand.ts`. Adicionalmente, `theme-vars.ts` lee este tipo para generar CSS custom properties — un campo mal mapeado no genera error de compilación pero rompe el sistema visual silenciosamente.

### `src/lib/core/active-brand.ts`

Lee `NEXT_PUBLIC_BRAND_SLUG`. Si la variable no está configurada, la app lanza un `Error` en build. Cambiar la lógica de validación puede romper todos los deploys. No modificar sin entender el impacto en el proceso de build.

### `src/lib/brands/registry.ts`

Registro central. Si una marca está en `BrandKey` pero no en el `brands` map (o viceversa), TypeScript lo detectará, pero el error puede no ser inmediatamente obvio.

### `eslint.config.mjs`

Contiene las reglas `no-restricted-imports` que protegen las capas. **No modificar nunca sin aprobación explícita**. Cambiar estas reglas puede silenciar errores de arquitectura que antes eran detectables automáticamente.

### `src/components/shared/background/GlobalBackground.tsx`

Lee `brand.theme.backgroundOverlay` para renderizar el fondo. Es un componente compartido — cualquier lógica condicional por slug que se añada aquí viola la arquitectura. Si una nueva marca necesita un fondo diferente, el cambio va en su `backgroundOverlay` config, no aquí.

---

## 5. Cómo validar que no rompiste nada

```bash
npm run check     # lint + typecheck + build (ejecutar siempre al terminar)
npm run lint      # solo ESLint (rápido, para verificar imports entre cambios)
npm run typecheck # solo TypeScript (sin build, más rápido)
```

El check completo confirma que:

- No hay imports ilegales entre capas
- No hay errores de tipos
- El build estático genera todas las páginas correctamente

Si el build falla pero lint y typecheck pasan, el problema suele estar en datos de brand incompletos o en lógica de generación estática.

---

## 6. Reglas de arquitectura que no se negocian

Estas no tienen excepciones. Si el cambio que necesitas hacer viola alguna, la solución es rediseñar el cambio, no saltarse la regla:

1. `components/shared/` no puede contener lógica condicional por `brand.slug`
2. `lib/brands/` no puede importar de `lib/core/`
3. `lib/types/` no puede importar nada interno
4. Los componentes no hardcodean nombres de marca, colores ni slugs
5. Toda variación visual entre marcas va en la configuración del brand (`lib/brands/`)
6. `npm run check` debe pasar antes de declarar un cambio como terminado

---

## 7. Errores comunes

**"Necesito que shared/ se comporte diferente para una marca"**
Incorrecto. El comportamiento diferencial va en la configuración del brand. El componente shared lee esa config y renderiza en consecuencia. Ver `GlobalBackground.tsx` como referencia de cómo se hace bien.

**"Voy a crear un archivo nuevo en shared/ para esta lógica de una marca"**
Incorrecto. Si la lógica es específica de una marca, el archivo va en `components/brand/`, no en `components/shared/`.

**"El cambio en BrandTheme es pequeño, no necesito revisar los 6 brands"**
Incorrecto. Con `exactOptionalPropertyTypes` activado, hasta un campo opcional mal tipado rompe la compilación en cada brand. Siempre verificar todos.

**"Voy a arreglar este código que parece raro"**
No arregles código que funciona sin entender por qué está así. Preguntar primero. El código "raro" suele tener una razón.

**"Voy a agregar `any` aquí para que compile"**
No. Resolver el tipo correcto. El uso de `any` en `lib/types/` está implícitamente prohibido por la configuración de TypeScript strict.

**"Modifiqué el componente pero el comportamiento no cambió"**
Puede ser caché de `.next/`. Ejecutar `rm -rf .next` y luego `npm run build` para confirmar con build limpio.

**"El lint pasa pero hay un warning de Tailwind sobre sintaxis de variables CSS"**
El warning `bg-[var(--x)]` puede escribirse como `bg-(--x)` en Tailwind v4. Es un hint de estilo, no un error. No urgente, no bloquea el trabajo.

---

## 8. Ante stubs, archivos vacíos o código ambiguo

Si encuentras un archivo vacío, un componente que retorna `null`, o código que no parece tener función clara:

1. No lo llenes con lógica sin preguntar
2. No lo borres sin verificar que no tiene imports en otros archivos (`grep -r "NombreDelArchivo" src/`)
3. Reportarlo al humano con una descripción de lo que encontraste
4. Si el humano confirma que es un residuo, eliminarlo

El repo ya pasó por una fase de limpieza. Si quedó algo ambiguo, probablemente fue intencional o está pendiente de definición.
