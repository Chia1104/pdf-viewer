import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MainNav } from "@/components";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { GeistProvider } from "@geist-ui/core";

// @ts-ignore
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...SEO} />
      <GeistProvider>
        <MainNav />
        <Component {...pageProps} />
      </GeistProvider>
    </SessionProvider>
  );
};

export default App;
