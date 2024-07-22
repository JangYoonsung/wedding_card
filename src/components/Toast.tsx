'use client';

import { useEffect, useState } from 'react';

const Toast: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed p-4 rounded bg-error bottom-5 right-5 text-white font-bold transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {message}
      <button type="button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Toast;
