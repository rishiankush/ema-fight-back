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
  metadataBase: new URL("https://emafightback.example"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "self defense training India",
    "kids safety workshop Chandigarh",
    "women’s self-defense",
    "people safety",
    "EMA Fight Back",
  ],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: site.name,
  description: site.description,
  telephone: `+91${site.phone}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandigarh",
    addressCountry: "IN",
  },
  foundingDate: String(site.founded),
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider initialLocale={initialLocale}>
          <a className="skip-link" href="#main">
            <T k="skip" />
          </a>
          <Header />
          <main id="main" className="flex-1">
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
