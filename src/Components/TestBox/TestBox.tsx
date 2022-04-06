import styles from './TestBox.module.css';
import { useState } from 'react';

interface Props {
  text?: string;
}

const TestBox = (props: Props) => {
  const {
    text = 'Waking up this morning was an eye-opening experience.'
  } = props;

  const [showTest, setShowText] = useState<boolean>(false);

  return (
    <div id='card-wrapper-id' className={styles.wrapper}>
      <div>
        <input
          type="radio"
          id="hideText"
          name="text"
          value="hideText"
          checked={!showTest}
          onClick={() => setShowText(false)}
        />
        <label htmlFor="hideText">Dölj Text</label>
        <input
          type="radio"
          id="showText"
          name="text"
          value="showText"
          checked={showTest}
          onClick={() => setShowText(true)}
        />
        <label htmlFor="showText">Visa text</label>
      </div>
      {showTest && <p className={styles.text}>{text}</p>}
    </div>
  );
}

export default TestBox;
