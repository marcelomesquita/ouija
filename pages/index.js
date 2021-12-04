import { useEffect, useRef, useState } from 'react';
import { FaDiceD20 } from 'react-icons/fa';
import { Howl } from 'howler';
import Container from '/components/layout/Container';
import { getRandomInteger, getRandomString } from '/helpers/random';
import { useTranslation } from 'hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  const features = [
    t('This is a digital ouija board, it generates random characters that sometimes make sense.'),
    t('It is believed that entities have the ability to interfere in the physical plane, managing to influence characters.'),
    t('Use at your own risk!'),
    t('Would you like to know about your future?'),
    t('How about knowing a little about the other side?'),
    t('The answers are not always as clear as we would like.'),
    t('Read the entire text, however random it may seem, the answers may be hidden.'),
    t('The entire universe waiting to be unraveled.'),
  ];
  const bullshits = [
    t('If there is anyone in this room listening to us, answer my questions '),
    t('Spirits who live here, can answer our sincere doubts '),
    t('Please, so that we can get going, answer me this simple question '),
    t('If there is anyone here right now who can communicate with us, please speak up'),
    t('Beings who roam in another dimension, if you can understand what I write, tell me what I want to know '),
    t('Spirits from beyond, listen to what I say and do what I say. Now answer my inquiry '),
    t('I summon whoever is in this room for immediate contact through this screen where I write '),
    t('Incommunicable ghosts, answer me I promise I will light a candle for you '),
    t('May the lost souls use this open path for communication between us present here '),
    t('Those here try to control the randomly generated letters to talk to us '),
    t('We are here waiting for an immediate contact with any type of individual '),
    t('Sacred goat please me by answering the question I ask you '),
  ];
  const sounds = {
    'radar': new Howl({ src: ['/assets/audios/radar.mp3'], preload: true })
  };

  const entryInput = useRef(null);
  const [psychographing, setPsychographing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState('');
  const [occult, setOccult] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [bullshit, setBullshit] = useState('');

  useEffect(() => {
    setAnswer(features[getRandomInteger(0, features.length)]);

    entryInput.current.focus();
  }, []);

  useEffect(() => {
    setBullshit(bullshits[getRandomInteger(0, bullshits.length)]);
  }, [answer])

  function invoke() {
    if (occult) {
      setAnswer(getRandomString() + occult + getRandomString());
    } else {
      setAnswer(getRandomString(getRandomInteger(10, 100)));
    }

    setOccult('');
    setLoading(false);
    
    sounds.radar.play();
    entryInput.current.focus();
  }
  
  function dactylography(key) {
    if (key == '/' && entry == '') {
      setPsychographing(true);
    }
  }

  function psycografy(key) {
    if (key != 'Enter') {
      setOccult(value => value + key);
      setEntry(bullshit.substring(0, occult.length + 1));
    }
  }

  function handleKeyDown(e) {
    if (psychographing) {
      if (e.key == 'Backspace') {
        setEntry(bullshit.substring(0, occult.length - 1));
        setOccult(value => value.substring(0, value.length - 1));
      }
    }
  }

  function handleKeyPress(e) {
    if (psychographing) {
      psycografy(e.key);
    } else {
      dactylography(e.key);
    }
  }

  function handleChange(e) {
    if (!psychographing) {
      setEntry(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (psychographing) {
      setPsychographing(false);
    } else {
      setQuestion(entry);
      setAnswer('');
      setEntry('');
      setLoading(true);

      setTimeout(invoke, (getRandomInteger(3, 9) * 1000));
    }
  }

  return (
    <Container>
      <div className='container-fluid mt-auto'>
        <div className='row justify-content-center text-center'>
          <div className='col-sm-8'>
            <h1 className='visually-hidden'>{t('OUIJA')}</h1>
            <p id='question' className='h1 text-primary'>{question}</p>
            <p id='answer' className={`h2 ${loading ? 'opacity-0' : 'opacity-100'}`}>{answer}</p>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-auto'>
        <div className='row justify-content-center'>
          <div className='col-sm-8'>
            <form onSubmit={e => handleSubmit(e)}>
              <div className='input-group input-group-lg'>
                <input 
                  type='text' 
                  className='form-control bg-dark text-light border-light' 
                  placeholder={t('What is your question?')} 
                  disabled={loading}
                  value={entry} 
                  ref={entryInput}
                  onKeyDown={e => handleKeyDown(e)}
                  onKeyPress={e => handleKeyPress(e)}
                  onChange={e => handleChange(e)}
                />
                <button className='btn btn-outline-light' type='submit'><FaDiceD20 size={20} /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}
