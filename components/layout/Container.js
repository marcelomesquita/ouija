import Footer from './Footer';

export default function Container({ children }) {
	return (
		<div className='cover d-flex flex-column text-light'>
			{children}

			<Footer />
		</div>
	);
}
