"use client";
import React, { useState, useEffect } from 'react';
import Home from './desktop';
import MobileLayout from './mobile';

const LoadingAnimation = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 25); // Adjust the interval time to complete the count in 3 seconds (100 counts in 3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="count">{count}%</div>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .count {
          font-size: 2rem;
          color: black;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};


const ResponsiveLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };

    const simulateLoading = async () => {
      // Simulate loading time
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    simulateLoading();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return isMobile ? <MobileLayout /> : <Home />;
};

export default ResponsiveLayout;

