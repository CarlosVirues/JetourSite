# Ticket para IT de Jetour — cambios DNS de `jetourecuador.com`

> Generado 2026-07-29. Para contexto del cutover ver [MIGRACION-STATUS.md](../MIGRACION-STATUS.md) §3.1–3.2.
>
> **Este documento es para pasarle a quien administra el tenant de Microsoft 365 de Jetour.**
> La zona DNS de `jetourecuador.com` está delegada a Microsoft
> (`ns1-4.bdm.microsoftonline.com`); GoDaddy es solo el registrador y **no sirve** para estos cambios.

---

## Resumen para quien aprueba

El sitio web de Jetour se está migrando de la agencia anterior a la infraestructura gestionada por
McCann. Para completarlo hacen falta **3 cambios en la zona DNS**, en dos etapas separadas.

**Lo que NO se toca, y es importante que quede claro:**

- ❌ **No se cambian los nameservers.** La zona sigue en Microsoft.
- ❌ **No se toca ningún registro `MX`.** El correo corporativo (Exchange Online) queda intacto.
- ❌ **No se toca el `SPF`** ni los `TXT` de verificación de Microsoft (`MS=ms82842531`, `mscid=…`).

Solo se agregan dos `TXT` nuevos y se actualiza un `CNAME`. El correo de la empresa no corre
ningún riesgo con estos cambios.

---

## Etapa 1 — Ahora (impacto cero, el sitio no se mueve)

Estos cambios **no afectan el sitio en vivo**. Solo prueban ante el proveedor de hosting que
Jetour es dueño del dominio. Se pueden aplicar en cualquier momento, sin ventana.

### 1.1 Agregar dos registros TXT

Ambos van en el **mismo nombre** (`_vercel`). Es válido y necesario tener dos TXT con el mismo
nombre — no reemplazar uno por el otro, tienen que estar los dos.

| Tipo | Nombre | Valor |
|---|---|---|
| `TXT` | `_vercel` | `vc-domain-verify=jetourecuador.com,9c7b74595ead99937717` |
| `TXT` | `_vercel` | `vc-domain-verify=www.jetourecuador.com,5a36a9efd2ded3126b92` |

> Si el panel pide el nombre completo en vez del prefijo, es `_vercel.jetourecuador.com`.

### 1.2 Bajar el TTL de dos registros

Esto es para poder revertir en minutos si algo sale mal en la Etapa 2. **No cambia a dónde apunta
nada** — solo cuánto tiempo lo cachean los servidores DNS del mundo.

| Registro | TTL actual | TTL a poner |
|---|---|---|
| `A` en la raíz (`@` / `jetourecuador.com`) | 1156 s | **60 s** |
| `CNAME` en `www` | 3543 s | **60 s** |

Después de aplicar, avisar para verificar. Hay que esperar a que expire el TTL viejo (hasta ~1 hora)
antes de la Etapa 2.

---

## Etapa 2 — En la ventana acordada (acá se mueve el sitio)

### 2.1 Actualizar el CNAME de `www`

| Tipo | Nombre | Valor actual | Valor nuevo |
|---|---|---|---|
| `CNAME` | `www` | `18fa7dbed69f5fd2.vercel-dns-017.com.` | `96d7750ff6bb680e.vercel-dns-016.com.` |

> ⚠️ Copiar el valor **exactamente, incluido el punto final**. Es un FQDN absoluto.

### 2.2 Registro `A` de la raíz — probablemente NO hay que cambiarlo

El `A` de la raíz ya apunta a `216.150.1.1`, que es la IP correcta del nuevo proveedor (es una IP
anycast compartida; el enrutamiento se decide por hostname, no por IP). Verificado: el proveedor
reporta `ipStatus: no-change`, `misconfigured: false`.

**Dejarlo como está.** Si tras el cambio de `www` el proveedor pidiera ajustarlo, el valor sería:

| Tipo | Nombre | Valor |
|---|---|---|
| `A` | `@` | `216.150.1.1` |
| `A` | `@` | `216.150.16.1` *(opcional, redundancia)* |

⚠️ **La raíz debe ser un registro `A`, nunca un `CNAME`.** Un CNAME en la raíz de la zona rompe los
`MX` y los `NS` (RFC 1034 §3.6.2) — es decir, tumbaría el correo.

---

## Etapa 3 — Cierre (lo hace McCann, no requiere IT)

- Activar el envío de leads al CRM y quitar el `noindex` del sitio nuevo.
- Restaurar los TTL a sus valores originales.
- Reenviar el `sitemap.xml` en Google Search Console.

---

## Rollback

Si algo sale mal en la Etapa 2, se revierte poniendo el `CNAME` de `www` de vuelta en
`18fa7dbed69f5fd2.vercel-dns-017.com.`. Con el TTL en 60 s, la reversión propaga en ~1 minuto.
Los TXT de la Etapa 1 pueden quedarse: son inertes y no afectan nada.

---

## Verificación previa ya hecha (2026-07-29)

Chequeado con `dig` para que no haya sorpresas en la emisión del certificado SSL:

- Sin registros `CAA` → no hace falta autorizar a Let's Encrypt explícitamente.
- Sin `_acme-challenge` residual del proveedor anterior → no bloqueará el certificado.
- Sin `_vercel` preexistente → los dos TXT de arriba entran limpios.
- Desafío de SSL aceptado: `http-01` (automático, no requiere más registros DNS).
