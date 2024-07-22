'use client';

import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

const RecoilProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
