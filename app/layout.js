import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <meta
        name="google-site-verification"
        content="VEy9xJOy75Ui3-w29BTFPp7jKeXcvtkgxEa3IzSfgp0"
      />
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
      <body className={`${poppins.variable} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
