'use client';

import { CommonProps } from '@/types/common';
import React from 'react';
import { RecoilRoot } from 'recoil';

const RecoilProvider: React.FC<CommonProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
