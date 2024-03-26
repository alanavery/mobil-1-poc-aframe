'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [carType, setCarType] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const BuyMe = () => {
    return (
      <>
        <a-text
          align="center"
          color="white"
          position="0 0 0"
          rotation="0 0 0"
          scale="2.5 2.5 2.5"
          value="Buy\nMe!"
        ></a-text>

        <a-circle
          color="green"
          opacity="0.9"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
        ></a-circle>
      </>
    );
  };

  const DontBuyMe = () => {
    return (
      <>
        <a-text
          align="center"
          color="white"
          position="0 0 0"
          rotation="0 0 0"
          scale="2.5 2.5 2.5"
          value="Don't\nBuy Me"
        ></a-text>

        <a-circle
          color="red"
          opacity="0.9"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
        ></a-circle>
      </>
    );
  };

  return (
    <main className={styles.main}>
      {!carType && (
        <div className={styles.dialogBox}>
          <p>What type of car do you drive?</p>

          <div className={styles.buttons}>
            <button
              className={styles.button}
              type="button"
              onClick={() => setCarType('hybrid')}
            >
              Hybrid
            </button>

            <button
              className={styles.button}
              type="button"
              onClick={() => setCarType('non-hybrid')}
            >
              Non-Hybrid
            </button>
          </div>
        </div>
      )}

      {isClient && carType && (
        <a-scene
          mindar-image="imageTargetSrc: mindar/targets-4.mind;"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
        >
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity mindar-image-target="targetIndex: 0">
            {carType === 'hybrid' ? <BuyMe /> : <DontBuyMe />}
          </a-entity>

          <a-entity mindar-image-target="targetIndex: 1">
            {carType !== 'hybrid' ? <BuyMe /> : <DontBuyMe />}
          </a-entity>
        </a-scene>
      )}
    </main>
  );
};

export default Page;
