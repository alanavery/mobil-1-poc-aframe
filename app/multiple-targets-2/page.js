'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const Highlight = () => {
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
          mindar-image="imageTargetSrc: mindar/hybrid-parts.mind; maxTrack: 3;"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
        >
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity>
            <Highlight />
          </a-entity>

          <a-entity mindar-image-target="targetIndex: 0">
            <Highlight />
          </a-entity>

          <a-entity mindar-image-target="targetIndex: 1">
            <Highlight />
          </a-entity>

          <a-entity mindar-image-target="targetIndex: 2">
            <Highlight />
          </a-entity>
        </a-scene>
      )}
    </main>
  );
};

export default Page;
