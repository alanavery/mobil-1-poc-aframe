'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const scene = document.getElementById('scene');
      const entity = document.getElementById('entity');

      entity.addEventListener('targetFound', () => {
        console.log('Target found.');
        entity.click();
      });

      entity.addEventListener('targetLost', () => console.log('Target lost.'));

      entity.addEventListener('click', (event) => {
        console.log('Click!');
        console.log(event);
      });
    }
  }, [isClient]);

  const Entity = () => {
    return (
      <a-circle
        color="green"
        opacity="0.9"
        position="0 0 0"
        rotation="0 0 0"
        scale="1 1 1"
      ></a-circle>
    );
  };

  return (
    <main className={styles.main}>
      {isClient && (
        <a-scene
          id="scene"
          mindar-image="imageTargetSrc: mindar/clr-closeup.mind;"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
        >
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity id="entity" mindar-image-target="targetIndex: 0">
            <Entity />
          </a-entity>
        </a-scene>
      )}
    </main>
  );
};

export default Page;
