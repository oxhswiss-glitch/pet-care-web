'use client';

import dynamic from 'next/dynamic';
import { useState, Suspense } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Fallback />,
});

function Fallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Scene3D() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      <Suspense fallback={<Fallback />}>
        <Spline
          scene="https://prod.spline.design/6Wq1QFzhDGyY6sEK/scene.splinecode"
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1.2s ease-out',
          }}
        />
      </Suspense>
    </div>
  );
}
