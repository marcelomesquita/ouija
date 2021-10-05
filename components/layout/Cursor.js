import Image from 'next/image';
import useMousePosition from '/hooks/useMousePosition';
import styles from '/assets/styles/Planchette.module.scss';
import planchette from '/assets/images/planchette.png';

export default function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      <div className={styles.planchette} style={{ left: `${x}px`, top: `${y}px` }}>
        <Image src={planchette} width={50} height={50} />
      </div>
    </>
  );
};
