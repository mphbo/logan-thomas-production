import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeWrapper } from "../Components/context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
