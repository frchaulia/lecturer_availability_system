import React from 'react';

const IframeComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%', position: 'relative', zIndex: 10 }}>
      <div style={{ position: 'relative', width: '80%', paddingBottom: '56.25%', height: 0, overflow: 'hidden', margin: 'auto' }}>
        <iframe
          title="jti space - Smplrspace"
          src="https://smplr.me/ZkWRQiS"
          style={{ border: '0px none', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 20 }}
          scrolling="no"
          allowFullScreen
        //   webkitallowfullscreen="true"
        //   mozallowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default IframeComponent;


{/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%', height: '100%, border: 0px none;' }}>
      <div style={{ position: 'relative', width: '80%', paddingBottom: '45%', height: 0, overflow: 'hidden', margin: 'auto' }}>
        <iframe
          title="jti space - Smplrspace"
          src="https://smplr.me/ZkWRQiS"
          style={{ border: '0px none', width: '100%', height: '100%' }}
          scrolling="no"
          allowFullScreen
        //   webkitallowfullscreen="true"
        //   mozallowfullscreen="true"
        ></iframe>
      </div>
</div> */}
