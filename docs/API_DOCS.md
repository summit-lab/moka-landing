# Documentación de API

**Base URL:** N/A
**Autenticación:** N/A
**Última actualización:** 2026-04-20

---

> Este proyecto es una landing page estática. No expone endpoints API.
> Si en el futuro se agregan API routes (ej: formulario de contacto),
> se documentarán aquí siguiendo el template del Método AInnovate.

---

## Índice de Endpoints

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| - | N/A | No hay endpoints | - |

---

## Formato de Respuestas

### Exitosa
```json
{
  "data": { },
  "message": "Operación exitosa"
}
```

### Error
```json
{
  "error": "Tipo de error",
  "message": "Descripción del error",
  "details": { }
}
```

---

## Códigos de Error Globales

| Código | Descripción |
|--------|-------------|
| 400 | Datos inválidos |
| 404 | No encontrado |
| 500 | Error del servidor |
