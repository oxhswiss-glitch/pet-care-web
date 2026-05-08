'use client';

import React, { useState, useEffect } from 'react';

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-50" />
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Fondo gradiente elegante con animación sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-indigo-100 to-indigo-50">
        {/* Elementos decorativos animados */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Contenido central con indicador de carga */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto border-2 border-indigo-300 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-indigo-600 font-light text-sm">Cargando experiencia 3D premium...</p>
        </div>
      </div>
    </div>
  );
}
