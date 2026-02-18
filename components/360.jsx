"use client";

import { useState, useEffect, useRef } from "react";

export default function ThreeSixty({
  model = "t1",
  totalFrames = 28,
  title = "Vista 360° del T1",
  subtitle = "Arrastra para rotar el vehículo o usa los controles de navegación",
  imagePath = "/models/t1/360",
  showInstructions = true,
  logoImage = null,
  logoAlt = "",
}) {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const containerRef = useRef(null);
  const imageCache = useRef(new Map());

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      let loadedCount = 0;
      const startTime = Date.now();
      const minLoadingTime = 2000; // Mínimo 2 segundos de carga

      for (let i = 1; i <= totalFrames; i++) {
        const img = new window.Image();
        img.src = `${model === "x70-plus" ? "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-plus" : imagePath}/${i}.png`;
        img.onload = () => {
          // Guardar en cache
          imageCache.current.set(i, img);
          loadedCount++;
          setLoadedImages(loadedCount);

          if (loadedCount === totalFrames) {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

            // Esperar el tiempo restante para completar el mínimo de carga
            setTimeout(() => {
              setIsLoading(false);
            }, remainingTime);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalFrames) {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

            setTimeout(() => {
              setIsLoading(false);
            }, remainingTime);
          }
        };
      }
    };

    preloadImages();
  }, [imagePath, totalFrames]);

  const handleSliderChange = (e) => {
    const newFrame = parseInt(e.target.value);
    setCurrentFrame(newFrame);
  };

  const nextFrame = () => {
    if (currentFrame < totalFrames) {
      setCurrentFrame(currentFrame + 1);
    }
  };

  const prevFrame = () => {
    if (currentFrame > 1) {
      setCurrentFrame(currentFrame - 1);
    }
  };

  return (
    <section
      className="py-16"
      style={{
        backgroundImage: "url('/bg-360.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title.replace("Vista 360° del", "Descubre los detalles y estilo del")}
          </h2>
          <p className="text-gray-300 text-lg">
            <span className="md:hidden">Usa el slider para rotar el vehículo.</span>
            <span className="hidden md:inline">Usa el slider o los controles de navegación para rotar el vehículo.</span>
          </p>
        </div>

        {/* 360 Viewer */}
        <div className="relative">
          <div
            ref={containerRef}
            className="relative w-full h-[350px] md:h-[600px] lg:h-[700px] bg-transparent overflow-hidden select-none"
          >
            {/* Logo de fondo con baja opacidad */}
            {logoImage && !isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <img
                  src={logoImage}
                  alt={logoAlt}
                  className="w-[50%] md:w-[45%] lg:w-[40%] h-auto opacity-20 -mt-32 md:-mt-48"
                />
              </div>
            )}
            
            {/* Icono 360° */}
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
                  <text x="20" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">360°</text>
                </svg>
              </div>
            </div>
            
            {/* Plataforma circular */}
            {!isLoading && (
              <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48">
                <div className="relative w-[90%] md:w-[80%] mx-auto h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 to-transparent rounded-full blur-3xl transform scale-x-150" />
                </div>
              </div>
            )}
            {!isLoading && (
              <img
                src={`${imagePath}/${currentFrame}.png`}
                alt={`Vista 360° del ${model.toUpperCase()} - Frame ${currentFrame}`}
                className="absolute w-full h-full inset-0 object-contain z-10 mt-28 md:mt-24"
              />
            )}
            {/* Loading overlay - only show while loading */}
            {isLoading && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-lg font-medium">
                    Preparando vista 360°...
                  </p>

                  <div className="mt-4 w-48 bg-gray-700 rounded-full h-2 mx-auto">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(loadedImages / totalFrames) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls - Desktop - Positioned at top center */}
          <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 z-10 gap-4">
            <button
              onClick={prevFrame}
              disabled={currentFrame === 1}
              className={`p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 shadow-lg ${
                currentFrame === 1
                  ? "bg-black bg-opacity-30 text-gray-500 cursor-not-allowed"
                  : "bg-black bg-opacity-60 hover:bg-opacity-80 text-white"
              }`}
              aria-label="Vista anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextFrame}
              disabled={currentFrame === totalFrames}
              className={`p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 shadow-lg ${
                currentFrame === totalFrames
                  ? "bg-black bg-opacity-30 text-gray-500 cursor-not-allowed"
                  : "bg-black bg-opacity-60 hover:bg-opacity-80 text-white"
              }`}
              aria-label="Vista siguiente"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>


        {/* Slider Control */}
        <div className="px-4 mt-8 md:mt-12 z-20 relative">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">0°</span>
              <span className="text-sm text-white font-medium">
                {Math.round(((currentFrame - 1) / (totalFrames - 1)) * 360)}°
              </span>
              <span className="text-sm text-gray-400">360°</span>
            </div>
            <input
              type="range"
              min="1"
              max={totalFrames}
              value={currentFrame}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #ffffff 0%, #ffffff ${
                  ((currentFrame - 1) / (totalFrames - 1)) * 100
                }%, #374151 ${
                  ((currentFrame - 1) / (totalFrames - 1)) * 100
                }%, #374151 100%)`,
              }}
            />
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>Inicio</span>
              <span>Fin</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        {showInstructions && (
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
                Usa el slider
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
                  />
                </svg>
                Usa las flechas
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
