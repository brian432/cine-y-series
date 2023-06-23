import { useState, useEffect } from 'react';

interface ResizeValues {
  isTablet: boolean;
  isPhone: boolean;
  isDesktop: boolean;
}

const useResize = (): ResizeValues => {
  const [resizeValues, setResizeValues] = useState<ResizeValues>({
    isTablet: false,
    isPhone: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = (): void => {
      const { innerWidth } = window;
      setResizeValues({
        isTablet: innerWidth <= 700,
        isPhone: innerWidth <= 500,
        isDesktop: innerWidth >= 700,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return resizeValues;
};

export default useResize;