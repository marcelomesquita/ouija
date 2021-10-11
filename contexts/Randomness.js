import { createContext, useContext, useEffect, useState } from 'react';
import { Howl } from 'howler';
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
	const sounds = {
		'drum': new Howl({ src: ['/assets/audios/drum.mp3'], preload: true }),
		'radar': new Howl({ src: ['/assets/audios/radar.mp3'], preload: true }),
		'talk': new Howl({ src: ['/assets/audios/talk.mp3'], preload: true }),
		'whisper': new Howl({ src: ['/assets/audios/whisper.mp3'], preload: true }),
		'whoosh': new Howl({ src: ['/assets/audios/whoosh.mp3'], preload: true })
	};

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
		sounds.drum.play();
	}

	function radar() {
		sounds.radar.play();
	}

	function talk() {
		sounds.talk.play();
	}

	function whisper() {
		sounds.whisper.play();
	}

	function whoosh() {
		sounds.whoosh.play();
	}

	return <RandomnessContext.Provider value={{ active }}>{props.children}</RandomnessContext.Provider>;
}
