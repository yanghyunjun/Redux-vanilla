import { AppProps, AppInitialProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { Provider } from "react-redux";
import store from "../store/store";

const MyApp = ({ Component, pageProps }: AppProps & AppInitialProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
