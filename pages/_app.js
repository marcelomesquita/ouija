import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';
import { analytics } from '/adapters/firebaseClient';

import '/assets/styles/globals.scss'
import Cursor from 'components/layout/Cursor';
import RandomnessProvider from 'contexts/Randomness';
import { useTranslation } from 'hooks/useTranslation';

export default function MyApp({ Component, pageProps }) {
  const routers = useRouter();
  const { t } = useTranslation();

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

        <meta name='application-name' content={t('Ouija')} />
        <meta name='description' content={t('A modern version of the infamous ouija board for chatting with spirits or whatever is out there')} />
        <meta name='keywords' content='ouija, táboa de ouija, tabuleiro de ouija, jogo dos espíritos, lúcifer' />

        <meta itemProp='name' content={t('Ouija')} />
        <meta itemProp='description' content={t('A modern version of the infamous ouija board for chatting with spirits or whatever is out there')} />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@ouijacombr' />
        <meta name='twitter:title' content={t('Ouija')} />
        <meta name='twitter:description' content={t('A modern version of the infamous ouija board for chatting with spirits or whatever is out there')} />
        <meta name='twitter:creator' content='@ouijacombr' />

        <meta property='og:title' content={t('Ouija')} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.ouija.com.br' />
        <meta property='og:description' content={t('A modern version of the infamous ouija board for chatting with spirits or whatever is out there')} />

        <title>Ouija</title>
        <link rel='shortcut icon' href='favicon.png' />
        <link rel='apple-touch-icon' href='favicon.png' />
        <link rel='apple-touch-startup-image' href='favicon.png' />
      </Head>

      <Cursor />

      <Component {...pageProps} />
    </RandomnessProvider>
  )
}
