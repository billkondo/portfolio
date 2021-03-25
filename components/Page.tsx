import React, { FunctionComponent } from 'react';
import { CssBaseline } from '@material-ui/core';
import Head from 'next/head';

import styles from 'styles/Home.module.css';

import APP_NAME from 'config/app_name';

type Props = {
  pageTitle?: string;
};

const Page: FunctionComponent<Props> = ({ children, pageTitle = APP_NAME }) => {
  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <div className={styles.container}>
        <Head>
          <title>{pageTitle}</title>

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>

        <main className={styles.main}>{children}</main>

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
      </div>
    </React.Fragment>
  );
};

export default Page;
