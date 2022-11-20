import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MainNav } from "@/components";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { GeistProvider } from "@geist-ui/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// @ts-ignore
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...SEO} />
      <GeistProvider>
        <QueryClientProvider client={queryClient}>
          <MainNav />
          <Component {...pageProps} />
        </QueryClientProvider>
      </GeistProvider>
    </SessionProvider>
  );
};

export default App;
