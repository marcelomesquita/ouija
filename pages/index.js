import { useEffect, useRef, useState } from 'react';
import Container from '/components/layout/Container';
import { getRandomInteger, getRandomString } from '/helpers/random';

export default function Home() {
  const features = [
    'Esse é um tabuleiro de ouija digital, ele gera caracteres aleatórios.',
    'Acredita-se que entidades tenham capacidade de interferir no plano físico, conseguindo influenciar os caracteres.',
    'Use por sua conta e risco!',
    'Gostaria de saber sobre seu futuro?',
    'Que tal conhecer um pouco sobre o outro lado?',
    'As respostas nem sempre são tão claras quanto gostaríamos.',
    'Leia todo o texto, por mais que pareça aleatório, as respostas podem estar escondidas.',
    'O universo inteiro esperando para ser desvendado.'
  ];
  const bullshits = [
    'Se existe alguém nesse recinto nos ouvindo, responda meus questionamentos, por favor ',
    'Espíritos que aqui habitam, podem responder nossas sinceras dúvidas ',
    'Por favor, para que possamos dar andamento, me responda essa simples pergunta ',
    'Se há alguém aqui nesse momento que pode se comunicar conosco, por favor, se manifeste ',
    'Seres que rondam a outra dimensão, se podem entender o que eu escrevo, diga-me o que eu quero saber ',
    'Espíritos do além, escutem o que eu digo e façam o que eu mando. Respondam agora minha indagação ',
    'Convoco quem quer que esteja nesse recinto para um contato imediato através dessa tela onde escrevo ',
    'Fantasmas incomunicaveis, se me responderem eu prometo que ascendo uma vela para vocês ',
    'Que as almas perdidas utilizem esse caminho aberto para a comunicação entre nós presentes aqui ',
    'Os que aqui se encontram tente controlar as letras geradas aleatoriamente para falar conosco ',
    'Estamos aqui presentes a espera de um contato imediato com qualquer tipo de indivíduo '
  ];

  const entryInput = useRef(null);
  const [psychographing, setPsychographing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState('');
  const [ocult, setOcult] = useState('');
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
    if (ocult) {
      setAnswer(getRandomString() + ocult + getRandomString());
    } else {
      setAnswer(getRandomString(getRandomInteger(10, 100)));
    }

    setOcult('');
    setLoading(false);
    entryInput.current.focus();
  }
  
  function datilography(key) {
    if (key == '/' && entry == '') {
      setPsychographing(true);
    } else if (key == 'Enter') {
      setQuestion(entry);
      setAnswer('');
      setEntry('');
      setLoading(true);

      setTimeout(invoke, (getRandomInteger(3, 9) * 1000));
    }
  }

  function psycografy(key) {
    if (key == 'Enter') {
      setPsychographing(false);
    } else {
      setOcult(value => value + key);
      setEntry(bullshit.substring(0, ocult.length + 1));
    }
  }

  function handleKeyDown(e) {
    if (psychographing) {
      if (e.key == 'Backspace') {
        setEntry(bullshit.substring(0, ocult.length - 1));
        setOcult(value => value.substring(0, value.length - 1));
      }
    }
  }

  function handleKeyPress(e) {
    if (psychographing) {
      psycografy(e.key);
    } else {
      datilography(e.key);
    }
  }

  function handleChange(e) {
    if (!psychographing) {
      setEntry(e.target.value);
    }
  }

  return (
    <Container>
      <div className='container-fluid mt-auto'>
        <div className='row justify-content-center text-center'>
          <div className='col-sm-8'>
            <p id='question' className='h1 text-primary'>{question}</p>
            <p id='answer' className={`h2 ${loading ? 'opacity-0' : 'opacity-100'}`}>{answer}</p>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-auto'>
        <div className='row justify-content-center'>
          <div className='col-sm-8'>
            <input 
              type='text' 
              className='form-control form-control-lg bg-dark text-light border-light' 
              placeholder='Qual a sua pergunta?' 
              disabled={loading}
              value={entry} 
              ref={entryInput}
              onKeyDown={e => handleKeyDown(e)}
              onKeyPress={e => handleKeyPress(e)}
              onChange={e => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
