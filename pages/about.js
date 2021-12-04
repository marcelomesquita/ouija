import Head from 'next/head';
import Container from 'components/layout/Container';
import { useTranslation } from 'hooks/useTranslation';

export default function About() {
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<meta name='application-name' content={t('Ouija')} />
				<meta name='description' content={t('A modern version of the infamous ouija board for chatting with spirits or whatever is out there')} />
				<meta name='keywords' content='ouija, táboa de ouija, tabuleiro de ouija, jogo dos espíritos, lúcifer' />

        <title>{t('About')} | {t('Ouija')}</title>
			</Head>
			<Container>
				<div className='container py-3 my-auto'>
					<div className='row justify-content-center'>
						<div className='col-12 col-md-8'>
							<h2 className='display-2 text-primary text-center'>{t('ABOUT')}</h2>
							<p className='ms-1'>{t('Also known as the spirit game or Lucifer, the digital version of the ouija board automates the communication process by generating random numbers that can be converted into readable characters. The probability of a logical phrase being presented is very remote, which is why these occurrences are attributed to entities.')}</p>
							<p className='ms-2'>{t('Some spiritologists believe that ghosts can interfere with the physical plane with less intensity than we do, but enough to be seen, heard and even felt. Focusing on the text field, press / and write the answer. Recently paranormal activities have also been identified in electronic objects such as recorders, televisions, cameras and computers, the latter being widely used for direct communication in environments with high supernatural signs.')}</p>
							<p className='me-3'>{t('The intensity with which the spirits manage to make themselves present is very low, therefore, every form of communication must be simplified as much as possible to facilitate the intervention of these beings.')}</p>
							<p className='ms-1'>{t('Use at your own risk.')}</p>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
