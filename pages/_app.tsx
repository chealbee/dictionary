import "@/styles/globals.scss";
import "@/styles/reset.scss";
import type { AppProps } from "next/app";
import { store } from "@/store/index";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
