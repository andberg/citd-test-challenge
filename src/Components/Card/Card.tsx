import styles from './Card.module.css';
import { useState } from 'react';

interface Props {
  header?: string;
  color?: 'green' | 'pink';
  infoText?: string;
}

const Card = (props: Props) => {
  const {
    header = 'Jag ändar färg',
    color = 'green',
    infoText
  } = props;

  const [headerColor, setHeaderColor] = useState<'green' | 'pink'>(color);

  return (
    <div id='card-wrapper-id' className={styles.wrapper}>
      <h2 id='card-header-id' className={headerColor === 'green' ? styles.green : styles.pink}>{header}</h2>
      {infoText && <p className={styles.infoText}>{infoText}</p>}
      <button
        className={styles.button}
        type='button'
        onClick={() => headerColor === 'green' ? setHeaderColor('pink') : setHeaderColor('green')}
      >
        Klicka här
      </button>
    </div>
  );
}

export default Card;
