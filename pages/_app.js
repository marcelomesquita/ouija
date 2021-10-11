import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';
import { analytics } from '/adapters/firebaseClient';

import '/assets/styles/globals.scss'
import Cursor from 'components/layout/Cursor';
import RandomnessProvider from 'contexts/Randomness';

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
    <RandomnessProvider>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='author' content='Marcelo Mesquita' />

        <meta name='application-name' content='Ouija' />
        <meta name='description' content='Versão moderna da infame táboa de ouija para conversar com espíritos ou o que quer seja que exista aí.' />
        <meta name='keywords' content='ouija lucifer' />

        <meta itemProp='name' content='Ouija' />
        <meta itemProp='description' content='Versão moderna da infame táboa de ouija para conversar com espíritos ou o que quer seja que exista aí.' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@ouijacombr' />
        <meta name='twitter:title' content='Ouija' />
        <meta name='twitter:description' content='Versão moderna da infame táboa de ouija para conversar com espíritos ou o que quer seja que exista aí.' />
        <meta name='twitter:creator' content='@ouijacombr' />

        <meta property='og:title' content='Ouija' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.ouija.com.br' />
        <meta property='og:description' content='Versão moderna da infame táboa de ouija para conversar com espíritos ou o que quer seja que exista aí.' />

        <title>Ouija</title>
        <link rel='shortcut icon apple-touch-icon apple-touch-startup-image' href='favicon.png' />
      </Head>

      <Cursor />

      <Component {...pageProps} />
    </RandomnessProvider>
  )
}
