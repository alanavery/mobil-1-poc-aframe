'use client';

import { useState, useEffect, useRef } from 'react';

const Scene = ({ setProgress, setNumMatches }) => {
  const [numFoundProducts, _setNumFoundProducts] = useState(0);
  const ref = useRef(numFoundProducts);
  const timeoutId = useRef(0);

  const setNumFoundProducts = (data) => {
    ref.current = data;
    _setNumFoundProducts(data);
  };

  const Confirmation = () => {
    return (
      <>
        <a-text
          align="center"
          color="white"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
          value="Scanned"
        ></a-text>

        <a-circle
          color="green"
          opacity="0.9"
          position="0 0 0"
          rotation="0 0 0"
          scale="0.5 0.5 0.5"
        ></a-circle>
      </>
    );
  };

  useEffect(() => {
    const entity = document.querySelector('a-entity');

    entity.addEventListener('targetLost', () => {
      clearTimeout(timeoutId.current);
    });

    entity.addEventListener('targetFound', () => {
      console.log('Target found.');

      const main = document.querySelector('main');

      const renderNotification = () => {
        const notificationScan = document.createElement('div');

        notificationScan.innerHTML = 'Scanning';
        notificationScan.className = 'notification notification--scan';
        notificationScan.onanimationend = ({ target }) => target.remove();

        main.appendChild(notificationScan);

        timeoutId.current = setTimeout(() => {
          renderNotification();
        }, 2000);
      };

      setNumFoundProducts(ref.current + 1);
      renderNotification();

      if (ref.current === 1) {
        setProgress(
          'When a bottle is found, a snapshot of it is sent to the recognition service.'
        );
      }

      if (ref.current === 3) {
        setTimeout(() => {
          const notificationMatch = document.createElement('div');

          notificationMatch.innerHTML = 'You found a match!';
          notificationMatch.className = 'notification notification--match';
          notificationMatch.onanimationend = ({ target }) => target.remove();

          main.appendChild(notificationMatch);

          setProgress(
            'If the recognition service finds a match, the user is notified.'
          );
          setNumMatches(1);
        }, 1000);
      }
    });

    setProgress(
      'The API returns a list of relevant products and the scanner starts. The scanner is looking for any bottle of Mobil 1 oil.'
    );
  }, [setProgress, setNumMatches]);

  return (
    <a-scene
      // mindar-image="imageTargetSrc: mindar/clr.mind; warmupTolerance: 5; missTolerance: 5;"
      mindar-image="imageTargetSrc: mindar/targets-1-zoom-1.mind; warmupTolerance: 5; missTolerance: 5;"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0" />
    </a-scene>
  );
};

export default Scene;
