'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import styles from './page.module.css';

const Page = () => {
  const [canvasRendered, setCanvasRendered] = useState(false);

  useEffect(() => {
    if (!canvasRendered) {
      // Create a scene
      const scene = new THREE.Scene();

      // Create a model
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: '#0000ff' });
      const cube = new THREE.Mesh(geometry, material);

      // Add model to scene
      scene.add(cube);

      cube.position.set(0, 0, -2);
      cube.rotation.set(0, Math.PI / 4, 0);

      // Create a camera
      const camera = new THREE.PerspectiveCamera();

      camera.position.set(1, 1, 5);

      // Create a renderer, which will create a canvas element and render the scene within it
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      renderer.setSize(500, 500);
      renderer.render(scene, camera);

      // Update the video element's source to the user's camera feed
      const video = document.querySelector('main video');

      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.play();
      });

      video.style.width = `${renderer.domElement.width}px`;
      video.style.height = `${renderer.domElement.height}px`;

      // Add the canvas element to the DOM
      const main = document.querySelector('main');

      main.appendChild(renderer.domElement);

      setCanvasRendered(true);

      // Start tracking!
      // const ar = new SOME_AR_ENGINE();

      // while (true) {
      //   await nextVideoFrameReady();

      //   const { position, rotation } = ar.computeTrackedObjectPosition(video);

      //   cube.position = position;
      //   cube.rotation = rotation;
      // }
    }
  }, [canvasRendered]);

  return (
    <main className={styles.main}>
      <video className={styles.video} />
    </main>
  );
};

export default Page;
