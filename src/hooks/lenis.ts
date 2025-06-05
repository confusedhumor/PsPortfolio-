import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, 
      smoothWheel:true
    });

    lenis.on('scroll', () => {
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenisScroll;
