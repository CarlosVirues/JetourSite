import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AttributionTracker from "@/components/AttributionTracker";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "JETOUR - Drive Your Future",
  description: "Drive Your Future",
};

export default function RootLayout({ children }) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <html lang="es" className="scroll-smooth">
      {/* La verificación de Search Console de la agencia anterior (devxiy) se retiró el
          2026-08-14: Carlos confirmó que ya no tienen relación con el cliente y le
          estábamos sosteniendo el acceso a la propiedad.
          La verificación vigente es por ARCHIVO, no por meta tag:
          public/googleea3a495c0e27a164.html → carlos@epifania.ai. NO BORRAR ese archivo.
          Para sumar otro propietario verificado (ej. redes@jetourecuador.com) se agrega su
          archivo o meta tag; el sitio admite varias verificaciones a la vez. */}
      {isProduction && (
        <>
          <Script
            id="tag-manager-head"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8V9MML2');`,
            }}
          />
          {/* Hotjar Tracking Code for Jetour */}
          <Script
            id="hotjar-tracking"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:6614022,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
        </>
      )}
      <body className={`${poppins.variable} antialiased overflow-x-hidden`}>
        {/* Captura UTMs/gclid en la primera visita para la atribución hacia Odoo. */}
        <AttributionTracker />
        {children}
      </body>
    </html>
  );
}
