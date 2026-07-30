# 🔴 URGENTE — dos registros TXT para restaurar jetourecuador.com

**El sitio está caído.** Se necesitan estos dos registros TXT en la zona DNS para restaurarlo.
Son los mismos dos de la Etapa 1, pero con **valores nuevos**: hay que **reemplazar** los que se
cargaron antes.

## Qué hay que hacer

En la zona DNS de `jetourecuador.com` (tenant de Microsoft 365):

**1. Borrar** los dos TXT de `_vercel` que se cargaron en la Etapa 1:

```
vc-domain-verify=jetourecuador.com,9c7b74595ead99937717        ← BORRAR
vc-domain-verify=www.jetourecuador.com,5a36a9efd2ded3126b92    ← BORRAR
```

**2. Agregar** estos dos, en el mismo nombre `_vercel` (los dos tienen que estar):

| Tipo | Nombre | Valor |
|---|---|---|
| `TXT` | `_vercel` | `vc-domain-verify=jetourecuador.com,86c244d1d3f6015e6e1e` |
| `TXT` | `_vercel` | `vc-domain-verify=www.jetourecuador.com,2ecc63adc724ba68e3f5` |

> Nombre completo por si el panel lo pide así: `_vercel.jetourecuador.com`

**3. Avisar apenas estén aplicados.** La restauración es inmediata del lado nuestro una vez que
los registros propaguen (el TTL quedó bajo, así que debería ser cuestión de minutos).

## Lo que NO hay que tocar

- ❌ Nameservers
- ❌ Registros `MX` — el correo corporativo no está afectado y no debe tocarse
- ❌ `SPF` ni los `TXT` de Microsoft (`MS=ms82842531`, `mscid=…`)
- ❌ El registro `A` de la raíz
- ❌ El `CNAME` de `www`

Solo se reemplazan los dos TXT de `_vercel`.
