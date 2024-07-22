'use client';

import { useVisible } from '@/hooks/useVisible';
import { CommonProps } from '@/types/common';
import React, { useRef } from 'react';

const AnimationWrapper: React.FC<CommonProps> = ({ children }) => {
  const divRef = useRef(null);
  const isVisible = useVisible(divRef);

  return (
    <div ref={divRef} className={`fade-in ${isVisible ? 'show' : ''}`}>
      {children}
    </div>
  );
};

export default AnimationWrapper;
