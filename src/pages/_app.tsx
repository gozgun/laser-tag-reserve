import "@/styles/styles.scss";
import "@/styles/form.css"
import "@/styles/buttons.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
