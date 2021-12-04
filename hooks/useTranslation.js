import { useRouter } from 'next/router';
import dictionary from '../dictionary';

export const useTranslation = () => {
	const { locale } = useRouter();

	return {
		t: (term) => {
			return (!dictionary[locale] || !dictionary[locale][term]) ? term : dictionary[locale][term];
		},
	};
};
