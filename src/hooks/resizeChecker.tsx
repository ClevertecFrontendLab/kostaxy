import { useEffect, useState } from 'react';

export const useResizeChecker = () => {
  const [testId, setTestId] = useState('sider-switch');
  const [headerBtnIcon, setHeaderBtnIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 834) {
        setTestId('sider-switch-mobile');
        setHeaderBtnIcon(true);
      } else {
        setTestId('sider-switch');
        setHeaderBtnIcon(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { testId, headerBtnIcon }
};
