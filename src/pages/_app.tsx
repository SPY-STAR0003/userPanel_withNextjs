// types
import type { AppProps } from 'next/app';
import React from 'react';

// libraries

// static files
import "../assets/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
