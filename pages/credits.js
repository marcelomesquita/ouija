import Head from 'next/head';
import Container from 'components/layout/Container';
import { useTranslation } from 'hooks/useTranslation';

export default function Credits() {
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<meta name='application-name' content={t('Ouija')} />
				<meta name='description' content={t('A modern version of the infamous ouija board for chatting with spirits or whatever is out there')} />
				<meta name='keywords' content='ouija, táboa de ouija, tabuleiro de ouija, jogo dos espíritos, lúcifer' />

				<title>{t('Credits')} | {t('Ouija')}</title>
			</Head>
			<Container>
				<div className='container py-3 my-auto'>
					<div className='row justify-content-center'>
						<div className='col-12 col-md-8'>
							<h2 className='display-2 text-primary text-center'>{t('CREDITS')}</h2>
							<p className='ms-2 text-center'>{t('Developed by')} <a href='https://www.marcelomesquita.com/' target='_blank' rel='noreferrer' className='text-decoration-none'>Marcelo Mesquita</a>.</p>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
