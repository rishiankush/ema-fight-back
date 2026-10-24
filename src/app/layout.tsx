import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";
import {
  Poppins,
  Noto_Sans_Devanagari,
  Noto_Sans_Gurmukhi,
  Noto_Sans_Bengali,
  Noto_Sans_Tamil,
  Noto_Sans_Telugu,
  Noto_Sans_Gujarati,
  Noto_Sans_Kannada,
  Noto_Sans_Malayalam,
} from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { LanguageProvider, T } from "@/i18n/LanguageProvider";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { site } from "@/content/site";
import { pageMetadata, seoPages } from "@/content/seo";
import { organizationJsonLd } from "@/lib/jsonLd";
import { getSiteUrl } from "@/lib/siteUrl";
import { Analytics } from "@/components/analytics/Analytics";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const gurmukhi = Noto_Sans_Gurmukhi({
  variable: "--font-gurmukhi",
  subsets: ["gurmukhi"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const bengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const tamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const telugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const gujarati = Noto_Sans_Gujarati({
  variable: "--font-gujarati",
  subsets: ["gujarati"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const kannada = Noto_Sans_Kannada({
  variable: "--font-kannada",
  subsets: ["kannada"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const malayalam = Noto_Sans_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...pageMetadata("home"),
  title: {
    default: seoPages.home.title,
    template: `%s | ${site.name}`,
  },
  applicationName: site.name,
  authors: [{ name: site.founder.name }],
  creator: site.name,
  openGraph: {
    ...pageMetadata("home").openGraph,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
};

function readLocale(value: string | undefined): Locale {
  return value && locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const initialLocale = readLocale(cookieStore.get("ema-locale")?.value);

  return (
    <html
      lang={initialLocale}
      suppressHydrationWarning
      className={`${poppins.variable} ${devanagari.variable} ${gurmukhi.variable} ${bengali.variable} ${tamil.variable} ${telugu.variable} ${gujarati.variable} ${kannada.variable} ${malayalam.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k=${JSON.stringify("ema-locale")};var s=localStorage.getItem(k);if(!s)return;var parts=document.cookie.split('; ');var cur='';for(var i=0;i<parts.length;i++){if(parts[i].indexOf(k+'=')===0){cur=parts[i].slice(k.length+1);break;}}if(cur===s)return;document.cookie=k+'='+s+';path=/;max-age=31536000;samesite=lax'+(location.protocol==='https:'?';secure':'');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Analytics />
        <LanguageProvider initialLocale={initialLocale}>
          <a className="skip-link" href="#main">
            <T k="skip" />
          </a>
          <Header />
          <main id="main" className="flex-1 pb-28">
            {children}
          </main>
          <Footer />
          <Suspense fallback={null}>
            <ChatWidget />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
