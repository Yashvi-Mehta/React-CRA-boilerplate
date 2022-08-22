// https://codesandbox.io/s/usebreakpoint-hook-i13rx?from-embed=&file=/src/components/App/App.css:0-329
import { useEffect, useState } from 'react';

import breakpoints from '../utils/breakpoints';

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState('');
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (windowSize.width && windowSize.width > 0 && windowSize.width < 600) {
      setBreakPoint(breakpoints[0]);
    }
    if (windowSize.width && windowSize.width > 600 && windowSize.width < 960) {
      setBreakPoint(breakpoints[600]);
    }
    if (windowSize.width && windowSize.width > 960 && windowSize.width < 1280) {
      setBreakPoint(breakpoints[960]);
    }
    if (
      windowSize.width &&
      windowSize.width > 1280 &&
      windowSize.width < 1920
    ) {
      setBreakPoint(breakpoints[1280]);
    }
    if (windowSize.width && windowSize.width >= 1920) {
      setBreakPoint(breakpoints[1920]);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
