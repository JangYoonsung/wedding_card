import { ToastProps } from '@/types/toast';
import { useEffect, useState } from 'react';
import CloseIcon from '/public/icon/close.svg';
import ErrorIcon from '/public/icon/error.svg';

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  const timeout = 3500;
  const animationTimeout = 500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, animationTimeout);
    }, timeout);

    return () => clearTimeout(timer);
  }, [onClose]);

  const classes = [
    'fixed p-4 rounded bg-error bottom-5 right-5 text-white text-sm font-bold transition-opacity duration-500',
    'flex items-start justify-center gap-2',
    visible ? 'opacity-100' : 'opacity-0',
  ]
    .filter(Boolean)
    .join(' ');

  const closeIconSize = 20;
  const errorIconSize = 34;

  return (
    <div className={classes}>
      <div className="flex items-center justify-center gap-4 ">
        <ErrorIcon width={errorIconSize} height={errorIconSize} />
        <div>
          <p className="text-base">失敗しました。</p>
          {message}
        </div>
      </div>
      <CloseIcon onClick={onClose} width={closeIconSize} height={closeIconSize} />
    </div>
  );
};

export default Toast;
