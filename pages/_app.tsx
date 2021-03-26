import React, { useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Head from 'next/head';

import 'styles/globals.css';
import styles from 'styles/Home.module.css';

import APP_NAME from 'config/app_name';

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
      <Grid
        container
        className={styles.container}
        direction="column"
        alignItems="center"
      >
        <Head>
          <title>{APP_NAME}</title>

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <Grid
          item
          container
          className={styles.main}
          xs={12}
          sm={10}
          md={8}
          style={{ flexGrow: 1 }}
        >
          <Component {...pageProps} />
        </Grid>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </Grid>
    </React.Fragment>
  );
}

export default MyApp;
