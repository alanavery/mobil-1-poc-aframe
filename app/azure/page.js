'use client';

import { useEffect } from 'react';
import { ImageAnalysisClient } from '@azure-rest/ai-vision-image-analysis';
import createClient from '@azure-rest/ai-vision-image-analysis';
import { AzureKeyCredential } from '@azure/core-auth';
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { CognitiveServicesCredentials } from '@azure/ms-rest-azure-js';

const Page = () => {
  // useEffect(() => {
  //   const xhr = new XMLHttpRequest();
  //   const data = JSON.stringify({
  //     url: 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/shelf-analysis/shelf.png',
  //   });

  //   xhr.addEventListener('readystatechange', () => {
  //     console.log('Response:', xhr);
  //     console.log('Response text:', xhr.responseText);

  //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
  //       console.log('Success!');
  //     }
  //   });

  //   xhr.open(
  //     'PUT',
  //     'https://test-computer-vision-resource.cognitiveservices.azure.com/computervision/productrecognition/ms-pretrained-product-detection/runs/test5?api-version=2023-04-01-preview'
  //   );

  //   xhr.setRequestHeader(
  //     'Ocp-Apim-Subscription-Key',
  //     process.env.NEXT_PUBLIC_AZURE_KEY_1
  //   );
  //   xhr.setRequestHeader('Content-Type', 'application/json');

  //   xhr.send(data);
  // }, []);

  // useEffect(() => {
  //   const key = process.env.NEXT_PUBLIC_VISION_KEY;
  //   const credentials = new CognitiveServicesCredentials(key);

  //   const endpoint = process.env.NEXT_PUBLIC_VISION_ENDPOINT;

  //   const client = new ComputerVisionClient(credentials, endpoint);

  //   client
  //     .describeImage(
  //       'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/shelf-analysis/shelf.png',
  //       {
  //         model: 'ms-pretrained-product-detection',
  //       }
  //     )
  //     .then((result) => {
  //       console.log('Result:');
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log('An error occurred:');
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    const testNum = 8;
    const imageUrl = `https://testworkspace4640503893.blob.core.windows.net/test-container/UI/2024-04-01_224909_UTC/shelf-mockup.jpg`;

    console.log(imageUrl);

    const analyzeImage = async () => {
      const putResponse = await fetch(
        `https://test-computer-vision-resource.cognitiveservices.azure.com/computervision/productrecognition/ms-pretrained-product-detection/runs/test${testNum}?api-version=2023-04-01-preview`,
        {
          method: 'PUT',
          headers: {
            'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_VISION_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: imageUrl,
          }),
        }
      );

      const putData = await putResponse.json();

      console.log('PUT Data:');
      console.log(putData);

      const getResponse = await fetch(
        `https://test-computer-vision-resource.cognitiveservices.azure.com/computervision/productrecognition/ms-pretrained-product-detection/runs/test${testNum}?api-version=2023-04-01-preview`,
        {
          method: 'GET',
          headers: {
            'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_VISION_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      const getData = await getResponse.json();

      console.log('GET Data:');
      console.log(getData);
    };

    analyzeImage();
  }, []);

  return (
    <main>
      <h1>Azure</h1>
    </main>
  );
};

export default Page;
