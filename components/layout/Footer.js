import Link from 'next/link'

export default function Footer() {
	return (
		<>
			<footer className='container-fluid'>
				<ul className='nav justify-content-center'>
					<li className='nav-item'><Link href='/'><a className='nav-link px-2 text-muted'>home</a></Link></li>
					<li className='nav-item'><Link href='/about'><a className='nav-link px-2 text-muted'>sobre</a></Link></li>
					<li className='nav-item'><Link href='/credits'><a className='nav-link px-2 text-muted'>créditos</a></Link></li>
				</ul>
			</footer>
		</>
	);
}
