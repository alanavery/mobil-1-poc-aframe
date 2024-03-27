'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className={styles.main}>
      {isClient && (
        <a-scene>
          <a-box color="red" rotation="0 45 45" scale="2 2 2"></a-box>
        </a-scene>
      )}
    </main>
  );
};

export default Page;
