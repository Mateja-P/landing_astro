import { useState, useEffect } from 'react';

const ScrollBar = () => {
  const [scrolled, setScrolled] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPx = document.documentElement.scrollTop;

      const childHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolledVal = (scrollPx / childHeight) * 100;

      setScrolled(scrolledVal);
    });
  }, [scrolled]);

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        height: '100%',
        zIndex: 21,
        padding: '0 1px',
        backgroundColor: '#222',
      }}
    >
      <div
        style={{
          height: scrolled + '%',
          backgroundImage: 'linear-gradient(to bottom, #5B254B , #2D2763)',
          width: '4px',
        }}
      ></div>
    </div>
  );
};

export default ScrollBar;
