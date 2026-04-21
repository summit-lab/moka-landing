# Seguridad — Moka Landing

## Autenticación
No aplica — landing page pública sin autenticación de usuarios.

## Autorización
No aplica — no hay roles ni permisos.

## Variables de Entorno
- Las variables de entorno se almacenan en `.env.local` (excluido de Git)
- `.env.example` contiene las variables necesarias sin valores reales
- Variables públicas usan prefijo `NEXT_PUBLIC_`

## Reglas INVIOLABLES
- NUNCA hardcodear credenciales
- NUNCA exponer API keys en el cliente sin prefijo `NEXT_PUBLIC_`
- NUNCA hacer deploy sin checklist de seguridad
- SIEMPRE mantener `.env.local` en `.gitignore`
- SIEMPRE usar `.env.example` como referencia

## Dependencias de Terceros
- Verificar que no se instalen dependencias con vulnerabilidades conocidas
- Mantener dependencias actualizadas
