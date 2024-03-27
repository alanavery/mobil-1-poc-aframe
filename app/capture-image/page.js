'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const target = document.querySelector('#target');

      target.addEventListener('targetFound', (event) => {
        console.log('Target found.');
        console.log(event);
  
        if (!image) {
          const canvas = document.createElement('canvas');  
          const main = document.querySelector('main');
          const video = main.querySelector('video');

          canvas.width = video.width;
          canvas.height = video.height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          const image = canvas.toDataURL('image/jpeg');

          console.log(image);

          // const link = document.createElement('a');
          // link.download = 'test.jpg';
          // link.href = image;
          // main.appendChild(link);
          // link.click();
          // main.removeChild(link);
        }
      });

      target.addEventListener('targetLost', (event) => {
        console.log('Target lost.');
        console.log(event);
      });
    }
  }, [isClient]);

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
      {image && <div></div>}

      {isClient && (
        <a-scene
          mindar-image="imageTargetSrc: mindar/targets-1-zoom-1.mind;"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
        >
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity
            id="target"
            class="clickable"
            mindar-image-target="targetIndex: 0"
          >
            <Highlight />
          </a-entity>
        </a-scene>
      )}
    </main>
  );
};

export default Page;
