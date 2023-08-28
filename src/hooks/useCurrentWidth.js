import { useLayoutEffect, useState } from 'react';
import { MAX_SCREEN } from '../utils/constans';

const useCurrentWidth = () => {
  const [width, setWidth] = useState(MAX_SCREEN);

  useLayoutEffect(() => {
    function handleWidth() {
      setWidth(window.innerWidth);
    };

    function updater(func, time) {
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          timer = null;
          func.apply(this, arguments);
        }, time);
      }
    }

    const updateHandleWidth = updater(handleWidth, 1000);

    window.addEventListener('resize', updateHandleWidth)
    handleWidth();
    return () => window.removeEventListener('resize', updateHandleWidth);
  }, [])
  return width;
}


export default useCurrentWidth;
