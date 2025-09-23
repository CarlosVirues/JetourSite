"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ThreeSixty() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startFrame, setStartFrame] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const containerRef = useRef(null);
  const totalFrames = 28;

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      let loadedCount = 0;

      for (let i = 1; i <= totalFrames; i++) {
        const img = new window.Image();
        img.src = `/models/t1/360/${i}.png`;
        img.onload = () => {
          loadedCount++;
          setLoadedImages(loadedCount);

          if (loadedCount === totalFrames) {
            setIsLoading(false);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalFrames) {
            setIsLoading(false);
          }
        };
      }
    };

    preloadImages();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartFrame(currentFrame);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const sensitivity = 0.1;
    const frameChange = Math.round(deltaX * sensitivity);
    let newFrame = startFrame + frameChange;

    // Wrap around
    if (newFrame < 1) newFrame = totalFrames + newFrame;
    if (newFrame > totalFrames) newFrame = newFrame - totalFrames;

    setCurrentFrame(newFrame);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartFrame(currentFrame);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 0.1;
    const frameChange = Math.round(deltaX * sensitivity);
    let newFrame = startFrame + frameChange;

    // Wrap around
    if (newFrame < 1) newFrame = totalFrames + newFrame;
    if (newFrame > totalFrames) newFrame = newFrame - totalFrames;

    setCurrentFrame(newFrame);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const nextFrame = () => {
    setCurrentFrame(currentFrame === totalFrames ? 1 : currentFrame + 1);
  };

  const prevFrame = () => {
    setCurrentFrame(currentFrame === 1 ? totalFrames : currentFrame - 1);
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vista 360° del T1
          </h2>
          <p className="text-gray-300 text-lg">
            Arrastra para rotar el vehículo o usa los controles de navegación
          </p>
        </div>

        {/* 360 Viewer */}
        <div className="relative">
          <div
            ref={containerRef}
            className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-black rounded-lg overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={`/models/t1/360/${currentFrame}.png`}
              alt={`Vista 360° del T1 - Frame ${currentFrame}`}
              fill
              className="object-contain transition-opacity duration-100"
              priority
            />

            {/* Loading overlay - only show while loading */}
            {isLoading && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p>Cargando vista 360°...</p>
                  <p className="text-sm mt-2">
                    {loadedImages} / {totalFrames} imágenes
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevFrame}
              className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 shadow-lg"
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
              className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 shadow-lg"
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

          {/* Frame Counter - Desktop */}
          <div className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-sm">
                {currentFrame} / {totalFrames}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevFrame}
            className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 shadow-lg"
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

          <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-sm">
              {currentFrame} / {totalFrames}
            </span>
          </div>

          <button
            onClick={nextFrame}
            className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 shadow-lg"
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

        {/* Instructions */}
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
              Arrastra para rotar
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
      </div>
    </section>
  );
}
