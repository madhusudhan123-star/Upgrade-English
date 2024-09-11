// import { Inter } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";
// import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Master English Grammar | Upgrade English",
//   description: "Learn advanced English grammar rules and techniques to improve your writing and speaking skills with Upgrade English.",
//   icons: { rel: "icon", url: '/favicon.ico' },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <meta name="google-site-verification" content="OBrLKpKEJEhiKAk42_o4y81KFWxsh5jihhVT3KZU7-w" />
//         <meta name="google-adsense-account" content="ca-pub-4476899930876130" />
//         <link rel="icon" href="/favicon.ico" />
//         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4476899930876130"
//           crossorigin="anonymous"></script>
//       </Head>
//       <body className={inter.className}>
//         {children}
//         <Script
//           id="google-tag-manager"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-THZ743TQ');
//             `
//           }}
//         />
//         <Script
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-9MLRPDECHD"
//         />
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-9MLRPDECHD');
//             `
//           }}
//         />

//         <Script
//           strategy="afterInteractive"
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4476899930876130"
//           crossOrigin="anonymous"
//         />
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-THZ743TQ"
//             height="0"
//             width="0"
//             style={{ display: 'none', visibility: 'hidden' }}
//           ></iframe>
//         </noscript>

//       </body>
//     </html>
//   );
// }
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import AdSense from "@/components/AdSense"; // Import the new AdSense component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Master English Grammar | Upgrade English",
  description: "Learn advanced English grammar rules and techniques to improve your writing and speaking skills with Upgrade English.",
  icons: { rel: "icon", url: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="OBrLKpKEJEhiKAk42_o4y81KFWxsh5jihhVT3KZU7-w" />
        <meta name="google-adsense-account" content="ca-pub-4476899930876130" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        {children}

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THZ743TQ');
            `,
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-9MLRPDECHD"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9MLRPDECHD');
            `,
          }}
        />

        {/* Google AdSense script */}
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4476899930876130"
          crossOrigin="anonymous"
        />

        {/* AdSense component */}
        <AdSense />

        {/* Noscript fallback for Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-THZ743TQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
