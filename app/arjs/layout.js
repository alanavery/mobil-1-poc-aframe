import Script from 'next/script';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Script
        src="https://aframe.io/releases/1.5.0/aframe.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v7.0.0/dist/aframe-extras.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"
        strategy="beforeInteractive"
      />
    </>
  );
};

export default Layout;
