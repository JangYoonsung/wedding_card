import { LabelProps } from '@/types/label';
import React from 'react';

const Label: React.FC<LabelProps> = ({ text, isRequired }) => {
  return (
    <div className="flex gap-2 pb-2">
      <label>{text}</label>
      {isRequired && <span className="bg-red-600 text-white rounded p-1 text-xs">必須</span>}
    </div>
  );
};

export default Label;
