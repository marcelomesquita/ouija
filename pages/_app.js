import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';
import { analytics } from '/adapters/firebaseClient';

import '/assets/styles/globals.scss'
import Cursor from 'components/layout/Cursor';

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

        <meta name='application-name' content='Ouija' />
        <meta name='description' content='Versão moderna da táboa de ouija. Apenas escreva sua pergunta e aguarde a resposta.' />
        <meta name='keywords' content='ouija' />

        <meta itemprop='name' content='Ouija' />
        <meta itemprop='description' content='Versão moderna da táboa de ouija. Apenas escreva sua pergunta e aguarde a resposta.' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@ouijacombr' />
        <meta name='twitter:title' content='Ouija' />
        <meta name='twitter:description' content='Versão moderna da táboa jogo de ouija. Apenas escreva sua pergunta e aguarde a resposta.' />
        <meta name='twitter:creator' content='@ouijacombr' />

        <meta property='og:title' content='Ouija' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.ouija.com.br' />
        <meta property='og:description' content='Versão moderna da táboa jogo de ouija. Apenas escreva sua pergunta e aguarde a resposta.' />

        <title>Ouija</title>
        <link rel='icon' type='image/x-icon' href='favicon.png' />
      </Head>

      <Cursor />

      <Component {...pageProps} />
    </>
  )
}
