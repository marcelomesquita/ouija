import Image from 'next/image';
import { useRandomness } from '/contexts/Randomness';
import useMousePosition from '/hooks/useMousePosition';
import styles from '/assets/styles/Cursor.module.scss';
import planchette from '/assets/images/planchette.png';
import { getRandomInteger } from '/helpers/random';

export default function Cursor() {
  const randomness = useRandomness();
  const { x, y } = useMousePosition();

  function getX() {
    if (randomness.active?.name == 'shake') {
      return x + getRandomInteger(1, 10);
    }

    return x;
  }

  function getY() {
    if (randomness.active?.name == 'shake') {
      return y + getRandomInteger(1, 10);
    }

    return y;
  }

  return (
    <>
      <div className={styles.planchette} style={{ left: `${getX()}px`, top: `${getY()}px` }}>
        <Image src={planchette} width={50} height={50} />
      </div>
    </>
  );
};
