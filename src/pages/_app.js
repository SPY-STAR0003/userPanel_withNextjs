// libraries
import { NextUIProvider } from '@nextui-org/react';

// static files
import "../../styles/bundle.scss"

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
