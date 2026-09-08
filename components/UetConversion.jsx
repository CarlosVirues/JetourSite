"use client";

import { useEffect } from "react";

// Dispara un evento de conversión de Microsoft Advertising (UET, Tag ID 97267586)
// al montar. Se renderiza en las páginas /gracias, a las que redirigen las server
// actions de los formularios tras un envío exitoso — es el "método de carga de
// página" de las instrucciones de Bing.
//
// `window.uetq` es una cola: si bat.js aún no cargó, el push queda encolado y el
// tag base lo procesa al instanciarse. Por eso no hace falta esperar al script.
// En desarrollo el tag base no se inyecta (ver app/layout.js), así que el push
// queda en un array inerte y no rompe nada.
export default function UetConversion({ event = "signup", params = {} }) {
  useEffect(() => {
    try {
      window.uetq = window.uetq || [];
      window.uetq.push("event", event, params);
    } catch {
      // La medición nunca debe romper la página.
    }
  }, [event]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
