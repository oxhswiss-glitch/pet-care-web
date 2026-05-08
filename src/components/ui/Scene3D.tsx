'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Importar Spline de forma dinámica para evitar problemas de SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-50">
      <div className="text-indigo-600 font-light">Cargando modelo 3D...</div>
    </div>
  ),
});

export default function Scene3D() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center">
          <div className="text-indigo-600 font-light">Cargando...</div>
        </div>
      }
    >
      <div className="w-full h-full min-h-96">
        <Spline
          scene="https://prod.spline.design/A61eUfIhm0qHJbhQ/scene.splinecode"
        />
      </div>
    </Suspense>
  );
}
