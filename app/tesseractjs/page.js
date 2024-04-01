'use client';

import { useEffect } from 'react';
import { createWorker } from 'tesseract.js';

const Page = () => {
  const detectText = async () => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize('/products/clorox-bw.jpg');
    console.log(ret.data.text);
    await worker.terminate();
  };

  useEffect(() => {
    detectText();
  }, []);

  return <h1>Tesseract.js</h1>;
};

export default Page;
