import React from 'react';

export const useFullscreen = () => {
  const [isFull, setIsFull] = React.useState(false);

  React.useEffect(() => {
    document.onfullscreenchange = () => setIsFull((prevValue) => !prevValue);
  }, []);

  const toggle = React.useCallback(
    () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    },
    [],
  );

  return { isFull, toggle };
};
