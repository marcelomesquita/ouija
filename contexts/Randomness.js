import { createContext, useContext, useEffect, useState } from 'react';
import { getRandomInteger } from '/helpers/random';

const RandomnessContext = createContext();

export const useRandomness = () => {
	return useContext(RandomnessContext);
};

export default function RandomnessProvider(props) {
	const [active, setActive] = useState(null);
	const tricks = [
		{ 'name': 'shake' },
		{ 'name': 'drum', 'callback': () => drum() },
		{ 'name': 'radar', 'callback': () => radar() },
		{ 'name': 'talk', 'callback': () => talk() },
		{ 'name': 'whisper', 'callback': () => whisper() },
		{ 'name': 'whoosh', 'callback': () => whoosh() }
	];
	const gap = 5 * 1000;
	const probability = 100;

	useEffect(() => {
    const interval = setInterval(randomness, gap);

    return () => {
      clearInterval(interval);
    }
  }, []);

	useEffect(() => {
    if (active?.callback) {
			active?.callback();
		}
  }, [active]);

	function randomness() {
		const total = Object.keys(tricks).length;
		const random = getRandomInteger(0, (probability * total));

		random <= total ? setActive(tricks[random]) : setActive();
	}

	function drum() {
		new Audio('/assets/audios/drum.mp3').play();
	}

	function radar() {
		new Audio('/assets/audios/radar.mp3').play();
	}

	function talk() {
		new Audio('/assets/audios/talk.mp3').play();
	}

	function whisper() {
		new Audio('/assets/audios/whisper.mp3').play();
	}

	function whoosh() {
		new Audio('/assets/audios/whoosh.mp3').play();
	}

	return <RandomnessContext.Provider value={{ active }}>{props.children}</RandomnessContext.Provider>;
}
