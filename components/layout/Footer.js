import Link from 'next/link'
import { useTranslation } from 'hooks/useTranslation';

export default function Footer() {
	const { t } = useTranslation();

	return (
		<>
			<footer className='container-fluid'>
				<ul className='nav justify-content-center'>
					<li className='nav-item'><Link href='/'><a className='nav-link px-2 text-muted'>{t('home')}</a></Link></li>
					<li className='nav-item'><Link href='/about'><a className='nav-link px-2 text-muted'>{t('about')}</a></Link></li>
					<li className='nav-item'><Link href='/credits'><a className='nav-link px-2 text-muted'>{t('credits')}</a></Link></li>
				</ul>
			</footer>
		</>
	);
}
