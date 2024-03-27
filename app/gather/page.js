'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const scene = document.querySelector('a-scene');
      scene.addEventListener('arReady', () => setReady(true));
    }
  }, [isClient]);

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
      {ready && (
        <svg
          className={styles.guide}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 267.04 557.02"
        >
          <path d="M265.71,103.91c0-.5-.26-.97-.68-1.24l-36.28-23.75-9.13-15.66c-.25-.43-.69-.71-1.19-.74l-7.92-.57v-3.75h3.16c.83,0,1.5-.67,1.5-1.5V14.14c0-.18-.03-.35-.09-.52l-4.66-12.64c-.22-.59-.78-.98-1.41-.98h-89.12c-.68,0-1.27.45-1.45,1.1l-3.1,11.31c-.04.13-.05.26-.05.4v44.34c0,.83.67,1.5,1.5,1.5h2.05v3.87h-6.92c-.52,0-1.01.27-1.28.72l-9.2,15.11L.5,169.32c-.32.28-.5.69-.5,1.11v362.47c0,6.56,2.11,11.96,6.28,16.02,7.92,7.74,20.59,8.09,22.83,8.09.17,0,.28,0,.33,0h202.19c16.3,0,22.02-10.86,22.76-16.53l9.31-51.21c.02-.08.02-.16.02-.25l3.33-210.2-1.33-174.92Z" />
        </svg>

        
      )}

      {isClient && (
        <a-scene
          mindar-image="imageTargetSrc: mindar/targets-4.mind; uiScanning: no;"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
        >
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity mindar-image-target="targetIndex: 0"></a-entity>

          <a-entity mindar-image-target="targetIndex: 1"></a-entity>
        </a-scene>
      )}
    </main>
  );
};

export default Page;
