// import { Inter } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";
// import Head from "next/head";
// import AdSense from "@/components/AdSense"; // Import the new AdSense component

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Improve Your English Speaking with AI Feedback | Upgrade English",
//   description: "Enhance your English speaking skills with our AI-powered self-learning course. Perfect for students, job seekers, and non-native speakers. Get instant feedback on your pronunciation and fluency.",
//   icons: { rel: "icon", url: '/favicon.ico' },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="google-site-verification" content="OBrLKpKEJEhiKAk42_o4y81KFWxsh5jihhVT3KZU7-w" />
//         <meta name="google-adsense-account" content="ca-pub-4476899930876130" />
//         <meta name="keywords" content="AI English speaking feedback, Improve English pronunciation online, Self-learning English course, English fluency improvement, AI-powered language learning, English speaking practice for job interviews, Non-native English speaker tool, Perfect your English accent" />
//         <meta name="description" content="Enhance your English speaking skills with our AI-powered self-learning course. Perfect for students, job seekers, and non-native speakers. Get instant feedback on your pronunciation and fluency." />
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body className={inter.className}>
//         {children}

//         {/* Google Tag Manager */}
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
//             `,
//           }}
//         />

//         {/* Google Analytics */}
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
//             `,
//           }}
//         />

//         {/* Google AdSense script */}
//         <Script
//           strategy="afterInteractive"
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4476899930876130"
//           crossOrigin="anonymous"
//         />

//         {/* AdSense component */}
//         <AdSense />

//         {/* Noscript fallback for Google Tag Manager */}
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
// // }
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";
// import Head from "next/head";
// import AdSense from "@/components/AdSense"; // Import the new AdSense component

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Improve Your English Speaking with AI Feedback | Upgrade English",
//   description: "Enhance your English speaking skills with our AI-powered self-learning course. Perfect for students, job seekers, and non-native speakers. Get instant feedback on your pronunciation and fluency.",
//   icons: { rel: "icon", url: '/favicon.ico' },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="google-site-verification" content="OBrLKpKEJEhiKAk42_o4y81KFWxsh5jihhVT3KZU7-w" />
//         <meta name="google-adsense-account" content="ca-pub-4476899930876130" />
//         <meta name="keywords" content="speaking English, IELTS preparation course, learn English speaking, IELTS preparation online, English learning course, English vocabulary, English language course, English language learning, study English, spoken English course, basic English grammar, improve English speaking, learn English grammar, basic English speaking, improve your English, improve English, learn American accent, course English, improve vocabulary, English speaking lessons, English spoken, learn English speaking course, improve my English, ESL course, basic English learning, improve English pronunciation, grammar courses, basic English words, English grammar lessons, improve English vocabulary, learn grammar, spoken English in Tamil, English teacher online classes, ESL English class, IELTS learning, learn spoken English, improve your vocabulary, learn English online with teacher, American accent course, improve grammar, pronunciation course, online ESL, improve my English speaking, learn English vocabulary, English improvement course, learn English pronunciation, improve your English speaking, improve English accent, improve spoken English, ESL learning, basic English course, learn English tutor, easy way to learn English, learn American accent online, improve my vocabulary, English pronunciation lessons, American English learning, online English schools, teach me English, learn to read English, IELTS academic preparation, learn English words, American English course, vocabulary learning, learn English online tutor, English learning class, improve pronunciation, online tutor for English speaking, English language class, learn pronunciation, ESL learning English, IELTS English speaking course, practicing English speaking, learn Kannada through English, learn IELTS online free, spoken English in Telugu, English language lessons, learn Tamil through English, American English pronunciation course, English class, ESL English lessons, teach a language online, learn English through Tamil, online IELTS preparation course, easy learning English, spoken English lessons, English grammar courses, pronunciation class, learn IELTS online, speak better English, learn English accent, learn to teach English, learn Telugu through English, learn new vocabulary, American pronunciation course, improve English grammar, basic English speaking course, study English with us" />
//         <meta name="description" content="Enhance your English speaking skills with our AI-powered self-learning course. Perfect for students, job seekers, and non-native speakers. Get instant feedback on your pronunciation and fluency." />
//         <meta name="description" content="Find the best English speaking courses, IELTS preparation courses, and more to improve your English skills. Explore our range of English learning resources and online courses." />
//         <meta name="keywords" content="english speaking course, ielts preparation course, learn english speaking, improve english speaking, english learning course, english vocabulary, english language course, study english, spoken english course, basic english grammar, learn english grammar, basic english speaking, improve your english, improve english, learn american accent, course english, improve vocabulary, english speaking lessons, english spoken, learn english speaking course, improve my english, esl course, basic english learning, improve english pronunciation, grammar courses, basic english words, english grammar lessons, improve english vocabulary, learn grammar, spoken english in tamil, english teacher online classes, esl english class, ielts learning, learn spoken english, improve your vocabulary, learn english online with teacher, american accent course, improve grammar, pronunciation course, online esl, improve my english speaking, learn english vocabulary, english improvement course, learn english pronunciation, improve your english speaking, improve english accent, improve spoken english, esl learning, basic english course, learn english tutor, easy way to learn english, learn american accent online, improve my vocabulary, english pronunciation lessons, american english learning, online english schools, teach me english, learn to read english, ielts academic preparation, learn english words, american english course, vocabulary learning, learn english online tutor, english learning class, improve pronunciation, online tutor for english speaking, english language class, learn pronunciation, esl learning english, ielts english speaking course, practicing english speaking, learn kannada through english, learn ielts online free, spoken english in telugu, english language lessons, learn tamil through english, american english pronunciation course, ingles class, esl english lessons, teach a language online, learn english through tamil, online ielts preparation course, easy learning english, spoken english lessons, english grammar courses, pronunciation class, learn ielts online, speak better english, learn english accent, learn to teach english, learn telugu through english, learn new vocabulary, american pronunciation course, improve english grammar, basic english speaking course, study english with us" />
//         <link rel="icon" href="/favicon.ico" />
//         {/* Structured Data */}
//         <Script
//           id="structured-data"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "EducationalOrganization",
//               "name": "Upgrade English",
//               "description": "An AI-powered app to enhance your English speaking skills through personalized feedback and practice.",
//               "url": "https://upgrade-english.vercel.app"
//             })
//           }}
//         />

//         {/* Open Graph and Twitter Meta Tags */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Upgrade English - AI Feedback for English Speaking" />
//         <meta property="og:description" content="Improve your English fluency with our AI-powered feedback app. Ideal for students, job seekers, and non-native speakers." />
//         <meta property="og:image" content="/path/to/image.jpg" />
//         <meta property="og:url" content="https://upgrade-english.vercel.app" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Upgrade English - AI Feedback for English Speaking" />
//         <meta name="twitter:description" content="Enhance your English skills with AI-driven feedback." />
//         <meta name="twitter:image" content="/path/to/image.jpg" />
//       </head>
//       <body className={inter.className}>
//         {children}

//         {/* Google Tag Manager */}
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
//             `,
//           }}
//         />

//         {/* Google Analytics */}
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
//             `,
//           }}
//         />

//         {/* Google AdSense script */}
//         <Script
//           strategy="afterInteractive"
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4476899930876130"
//           crossOrigin="anonymous"
//         />

//         {/* AdSense component */}
//         <AdSense />

//         {/* Noscript fallback for Google Tag Manager */}
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
  title: "Improve Your English Speaking with AI Feedback | Upgrade English",
  description: "Enhance your English speaking skills with our AI-powered self-learning course. Perfect for students, job seekers, and non-native speakers. Get instant feedback on your pronunciation and fluency.",
  icons: { rel: "icon", url: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="iApNvr_98Gy1OXlrxQSMOM3hGZ5CUgPaoSz4K6avLXc" />
        <meta name="google-site-verification" content="OBrLKpKEJEhiKAk42_o4y81KFWxsh5jihhVT3KZU7-w" />
        <meta name="google-adsense-account" content="ca-pub-4476899930876130" />
        <meta name="keywords" content="speaking English, IELTS preparation course, learn English speaking, IELTS preparation online, English learning course, English vocabulary, English language course, English language learning, study English, spoken English course, basic English grammar, improve English speaking, learn English grammar, basic English speaking, improve your English, improve English, learn American accent, course English, improve vocabulary, English speaking lessons, English spoken, learn English speaking course, improve my English, ESL course, basic English learning, improve English pronunciation, grammar courses, basic English words, English grammar lessons, improve English vocabulary, learn grammar, spoken English in Tamil, English teacher online classes, ESL English class, IELTS learning, learn spoken English, improve your vocabulary, learn English online with teacher, American accent course, improve grammar, pronunciation course, online ESL, improve my English speaking, learn English vocabulary, English improvement course, learn English pronunciation, improve your English speaking, improve English accent, improve spoken English, ESL learning, basic English course, learn English tutor, easy way to learn English, learn American accent online, improve my vocabulary, English pronunciation lessons, American English learning, online English schools, teach me English, learn to read English, IELTS academic preparation, learn English words, American English course, vocabulary learning, learn English online tutor, English learning class, improve pronunciation, online tutor for English speaking, English language class, learn pronunciation, ESL learning English, IELTS English speaking course, practicing English speaking, learn Kannada through English, learn IELTS online free, spoken English in Telugu, English language lessons, learn Tamil through English, American English pronunciation course, ingles class, ESL English lessons, teach a language online, learn English through Tamil, online IELTS preparation course, easy learning English, spoken English lessons, English grammar courses, pronunciation class, learn IELTS online, speak better English, learn English accent, learn to teach English, learn Telugu through English, learn new vocabulary, American pronunciation course, improve English grammar, basic English speaking course, study English with us" />
        <meta name="description" content="Enhance your English speaking skills with our AI-powered self-learning course. Perfect for students, job seekers, and non-native speakers. Get instant feedback on your pronunciation and fluency." />
        <meta name="description" content="Find the best English speaking courses, IELTS preparation courses, and more to improve your English skills. Explore our range of English learning resources and online courses." />
        <meta name="keywords" content="english speaking course, ielts preparation course, learn english speaking, improve english speaking, english learning course, english vocabulary, english language course, study english, spoken english course, basic english grammar, learn english grammar, basic english speaking, improve your english, improve english, learn american accent, course english, improve vocabulary, english speaking lessons, english spoken, learn english speaking course, improve my english, esl course, basic english learning, improve english pronunciation, grammar courses, basic english words, english grammar lessons, improve english vocabulary, learn grammar, spoken english in tamil, english teacher online classes, esl english class, ielts learning, learn spoken english, improve your vocabulary, learn english online with teacher, american accent course, improve grammar, pronunciation course, online esl, improve my english speaking, learn english vocabulary, english improvement course, learn english pronunciation, improve your english speaking, improve english accent, improve spoken english, esl learning, basic english course, learn english tutor, easy way to learn english, learn american accent online, improve my vocabulary, english pronunciation lessons, american english learning, online english schools, teach me english, learn to read english, ielts academic preparation, learn english words, american english course, vocabulary learning, learn english online tutor, english learning class, improve pronunciation, online tutor for english speaking, english language class, learn pronunciation, esl learning english, ielts english speaking course, practicing english speaking, learn kannada through english, learn ielts online free, spoken english in telugu, english language lessons, learn tamil through english, american english pronunciation course, ingles class, esl english lessons, teach a language online, learn english through tamil, online ielts preparation course, easy learning english, spoken english lessons, english grammar courses, pronunciation class, learn ielts online, speak better english, learn english accent, learn to teach english, learn telugu through english, learn new vocabulary, american pronunciation course, improve english grammar, basic english speaking course, study english with us" />
        <link rel="icon" href="/favicon.ico" />
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Upgrade English",
              "description": "An AI-powered app to enhance your English speaking skills through personalized feedback and practice.",
              "url": "https://upgrade-english.vercel.app"
            })
          }}
        />
        <Script
          id="structured-data-english-learning-center"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "English Learning Center",
              "description": "We offer a range of English learning resources including courses for IELTS preparation, spoken English, and vocabulary improvement.",
              "url": "https://www.example.com",
              "sameAs": "https://www.facebook.com/englishlearningcenter"
            })
          }}
        />

        {/* Open Graph and Twitter Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Upgrade English - AI Feedback for English Speaking" />
        <meta property="og:description" content="Improve your English fluency with our AI-powered feedback app. Ideal for students, job seekers, and non-native speakers." />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://upgrade-english.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upgrade English - AI Feedback for English Speaking" />
        <meta name="twitter:description" content="Enhance your English skills with AI-driven feedback." />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </head>
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