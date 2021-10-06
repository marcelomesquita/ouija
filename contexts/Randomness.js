import { createContext, useContext, useEffect, useState } from 'react';
import { getRandomInteger } from '/helpers/random';

const RandomnessContext = createContext();

export const useRandomness = () => {
	return useContext(RandomnessContext);
};

export default function RandomnessProvider(props) {
	const [active, setActive] = useState(null);

	useEffect(() => {
    const interval = setInterval(randomness, 5000);

    return () => {
      clearInterval(interval);
    }
  }, []);

	const randomness = () => {
		const random = getRandomInteger(0, 100);

		switch (random) {
			case 0:
				setActive('shake');
				break;
			default:
				setActive();
		}
	}

	return <RandomnessContext.Provider value={{ active }}>{props.children}</RandomnessContext.Provider>;
}
