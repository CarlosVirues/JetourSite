# Revisión del sitio Jetour — para Cris

El nuevo sitio de Jetour Ecuador ya está listo para tu revisión en un entorno de pruebas (staging).

## 🔗 Link de revisión

**https://jetour-ec-staging.vercel.app**

> Es una copia idéntica del sitio actual, corriendo en la infraestructura nueva. No es el sitio en vivo: `jetourecuador.com` sigue intacto. Este link es privado (no aparece en Google).

## Qué puedes hacer con confianza

- **Navegar todo el sitio**: home, los 10 modelos de vehículos, noticias, posventa, concesionarios, contacto, test-drive y las landings de campaña.
- **Probar los formularios** (contacto, cotización, agenda de taller): funcionan completos — validan, guardan y muestran la página de "gracias". **En este entorno de pruebas NO se envían leads al CRM ni a las campañas**, así que puedes probar sin ensuciar nada. (Al lanzar el sitio en vivo, los leads vuelven a fluir al CRM automáticamente.)
- **Revisar contenido de vehículos**: ahora es editable desde el panel de administración (Sanity Studio) en `/studio`.

## Qué revisar / reportar

- Textos, fotos y datos de cada modelo.
- Que los formularios lleguen a la página de gracias.
- Cualquier imagen que se vea mal, texto incorrecto o sección que falte.

## Pendientes conocidos (no hace falta reportarlos)

- **Noticias**: el contenido sigue siendo de relleno ("Lorem ipsum"). Se cargará contenido real más adelante.
- Algunos thumbnails de video puntuales faltan (assets que no estaban en el sitio original).

## Para lanzar en vivo (cutover) se necesita de tu lado

1. **Acceso a GoDaddy** de `jetourecuador.com` (para apuntar el dominio).
2. Traspaso del proyecto Sanity a una cuenta de Jetour (opcional, puede ser después).

---
*Entorno: Vercel (Epifania) · Verificado: 30/30 rutas OK, 0 errores de consola, imágenes desde CMS. Actualizado 2026-06-11.*
