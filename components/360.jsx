"use client";

import { useState, useEffect, useRef } from "react";

export default function ThreeSixty({
  model = "t1",
  totalFrames = 28,
  title = "Vista 360° del T1",
  subtitle = "Arrastra para rotar el vehículo o usa los controles de navegación",
  imagePath = "/models/t1/360",
  showInstructions = true,
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
        img.src = `${imagePath}/${i}.png`;
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
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-lg">
            Usa el slider o los controles de navegación para rotar el vehículo
          </p>
        </div>

        {/* 360 Viewer */}
        <div className="relative">
          <div
            ref={containerRef}
            className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-black rounded-lg overflow-hidden select-none"
          >
            <img
              src={`${imagePath}/${currentFrame}.png`}
              alt={`Vista 360° del ${model.toUpperCase()} - Frame ${currentFrame}`}
              className="w-full h-full object-contain"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />

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

          {/* Navigation Controls - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevFrame}
              disabled={currentFrame === 1}
              className={`p-4 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 shadow-lg ${
                currentFrame === 1
                  ? "bg-black bg-opacity-30 text-gray-500 cursor-not-allowed"
                  : "bg-black bg-opacity-60 hover:bg-opacity-80 text-white"
              }`}
              aria-label="Vista anterior"
            >
              <svg
                className="w-8 h-8"
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
          </div>

          <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextFrame}
              disabled={currentFrame === totalFrames}
              className={`p-4 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 shadow-lg ${
                currentFrame === totalFrames
                  ? "bg-black bg-opacity-30 text-gray-500 cursor-not-allowed"
                  : "bg-black bg-opacity-60 hover:bg-opacity-80 text-white"
              }`}
              aria-label="Vista siguiente"
            >
              <svg
                className="w-8 h-8"
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

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex justify-center items-center gap-6 mt-6">
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

        {/* Slider Control */}
        <div className="mt-8 px-4">
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
