import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import Head from 'next/head';

import 'styles/globals.css';
import styles from 'styles/Home.module.css';

import NAME from 'config/name';
import APP_NAME from 'config/app_name';

import Footer from 'components/footer/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <div className={styles.container}>
        <Head>
          <title>{APP_NAME}</title>

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <meta name="author" content={`${NAME}`}></meta>
          <meta name="keywords" content="Portfolio, William, Hideki, Kondo" />
          <link rel="canonical" href="https://www.billkondo.com/" />
        </Head>

        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
