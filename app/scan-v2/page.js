'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Scene from './components/scene';
import styles from './page.module.css';

const Page = () => {
  const [progress, setProgress] = useState(
    'The user submits their vehicle specs via a form.'
  );
  const [carType, setCarType] = useState('');
  const [numMatches, setNumMatches] = useState(0);
  const [showMatches, setShowMatches] = useState(false);

  const handleClick = () => {
    if (numMatches >= 1) {
      setShowMatches(!showMatches);

      setProgress('The user can access their matches at any time.');
    }
  };

  useEffect(() => {
    if (carType) {
      const videoBg = document.querySelector('.bg-video');

      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoBg.srcObject = stream;
        videoBg.play();
      });

      // const main = document.querySelector('main');

      // videoBg = document.createElement('video');

      // videoBg.setAttribute('autoplay', true);
      // videoBg.setAttribute('muted', true);
      // videoBg.setAttribute('playsInline', true);

      // navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      //   videoBg.srcObject = stream;
      //   video.play();
      // });

      // main.appendChild(videoBg);
    }
  }, [carType]);

  return (
    <main className={styles.main}>
      <div className={styles.progress}>{progress}</div>

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

      {carType && (
        <>
          <video class={`${styles.bgVideo} bg-video`} autoplay muted playsInline />

          <Scene setProgress={setProgress} setNumMatches={setNumMatches} />

          <div className={styles.count} onClick={handleClick}>
            {numMatches}
          </div>
        </>
      )}

      {showMatches && (
        <div className={styles.matches}>
          <h1>Matches</h1>

          <h2>Mobil 1</h2>
          <h3>OW-20</h3>

          <Image
            className={styles.product}
            src="/ui/mobil-1-hybrid.jpeg"
            width={640}
            height={640}
            alt=""
          ></Image>
        </div>
      )}
    </main>
  );
};

export default Page;
