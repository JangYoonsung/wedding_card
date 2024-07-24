import { COLOR } from '@/constants/common';
import React from 'react';

export type CommonProps = { children: React.ReactNode; classes?: string };

export type Color = (typeof COLOR)[keyof typeof COLOR];
