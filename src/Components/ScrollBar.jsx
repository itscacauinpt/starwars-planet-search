import React, { useState, useEffect } from 'react';

export default function ScrollBar() {
  const [scrollBar, setscrollBar] = useState(false);

  useEffect(() => {
    const TIME_TO_SCROLL = 3000;
    const setScrollBarTime = () => {
      setscrollBar(false);
    };
    setTimeout(setScrollBarTime, TIME_TO_SCROLL);
  }, []);

  return (
    <div>
      {
        scrollBar && (
          <p
            className="filter-color"
          >
            abaixa aqui
          </p>
        )
      }
    </div>
  );
}
