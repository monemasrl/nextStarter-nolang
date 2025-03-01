import { Roboto_Condensed } from "next/font/google";
import "@/sass/all.scss";
import SmoothScrolling from "@/components/scroll/smoothScrolling";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";
import meta from "../../public/data/meta-home.json";
import Nav from "@/components/mainLayoutComponents/nav/nav";
import CookieConsentBanner from "@/components/cookieConsent/cookieConsent";
import Footer from "@/components/mainLayoutComponents/footer/footer";
import ScrollTop from "@/components/scroll/scrollToTop";
import GoogleAnalytics from "@/components/cookieConsent/googleAnalytics";

const inter = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "700"],
});

/** FUNZIONE NEXT PER INSERIRE I METADATA NELL' HEAD */
export async function generateMetadata() {
  const data = meta["it"].metaHtml;
  return data;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        {/* COMPONENTE PER INSERIRE I META JSONLD PER GOOGLE  */}
        <JsonldMetaData metadata={meta} />
        <link rel="icon" href="/image/favicon.ico" />
      </head>
      <body className={inter.variable}>
        <CookieConsentBanner />
        <Nav />
        <SmoothScrolling>{children}</SmoothScrolling>
        <Footer />
        <ScrollTop />
      </body>
      {process.env.GA_MEASUREMENT_ID && (
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
