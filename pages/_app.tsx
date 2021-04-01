import React, { useEffect } from 'react';
import { CssBaseline, makeStyles, colors } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Head from 'next/head';

import 'styles/globals.css';
import styles from 'styles/Home.module.css';

import NAME from 'config/name';
import APP_NAME from 'config/app_name';

import useApp from 'hooks/useApp';

import Footer from 'components/footer/Footer';

const useStyles = makeStyles({
  success: {
    backgroundColor: `${colors.green[900]} !important`,
    color: `${colors.grey[200]} !important`,
  },
  error: {
    backgroundColor: `${colors.red[900]} !important`,
    color: `${colors.grey[200]} !important`,
  },
});

function MyApp({ Component, pageProps }) {
  useApp();
  const classes = useStyles();

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
            name="description"
            content={`${APP_NAME} | Projects | Contacts`}
          ></meta>

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <meta name="author" content={`${NAME}`}></meta>
          <meta name="keywords" content="Portfolio, William, Hideki, Kondo" />
          <link rel="canonical" href="https://www.billkondo.com/" />
        </Head>

        <main className={styles.main}>
          <SnackbarProvider
            maxSnack={1}
            classes={{
              variantSuccess: classes.success,
              variantError: classes.error,
            }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </main>

        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
