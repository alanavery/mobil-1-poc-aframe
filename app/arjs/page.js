'use client';

import { useState, useEffect } from 'react';

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      <h1>AR.js Test</h1>

      {isClient && (
        <a-scene
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        >
          <a-nft
            type="nft"
            url="mobil-1-descriptors"
            smooth="true"
            smoothCount="10"
            smoothTolerance="0.01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model="CesiumMan.glb"
              scale="50 50 50"
              position="200 350 300"
              animation-mixer
            ></a-entity>
          </a-nft>
        </a-scene>
      )}
    </main>
  );
};

export default Page;
