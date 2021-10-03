import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';
import { analytics } from '/adapters/firebaseClient';

import '/assets/styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;

    if (process.env.NEXT_PUBLIC_PRODUCTION) {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);

      logEvent(window.location.pathname);

      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
		}
  }, [])

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='author' content='Marcelo Mesquita' />
        <meta name='description' content='O site oujia moderniza a forma de se comunicar com espíritos.' />

        <title>Ouija</title>
        <link rel='icon' type='image/x-icon' href='favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
