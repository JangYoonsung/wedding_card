'use client';

import { useEffect, useState } from 'react';
import CloseIcon from '/public/icon/close.svg';

const Toast: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const classes = [
    'fixed p-4 rounded bg-error bottom-5 right-5 text-white text-sm font-bold transition-opacity duration-500',
    'flex items-center justify-center gap-2',
    visible ? 'opacity-100' : 'opacity-0',
  ]
    .filter(Boolean)
    .join(' ');

  const iconSize = 20;

  return (
    <div className={classes}>
      {message}
      <CloseIcon onClick={onClose} width={iconSize} height={iconSize} />
    </div>
  );
};

export default Toast;
