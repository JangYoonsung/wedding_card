import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  const textBoxStyle = 'flex items-center justify-center gap-1';
  const linkProps = { target: '_blank', rel: 'noopener noreferrer', className: 'underline' };

  return (
    <footer className="bg-[#6e4f3099] text-center text-white text-xs py-4">
      <div className="grid">
        <div className={textBoxStyle}>
          <p>Developed And Designed by</p>
          <Link
            href="https://github.com/JangYoonsung"
            target={linkProps.target}
            rel={linkProps.rel}
            className={linkProps.className}>
            @yoonsung.
          </Link>
        </div>
        <div className={textBoxStyle}>
          <p>Powered By</p>
          <Link
            href="https://vercel.com"
            target={linkProps.target}
            rel={linkProps.rel}
            className={linkProps.className}>
            vercel.
          </Link>
        </div>
        <div className={textBoxStyle}>
          <p>© 2024 Yoonsung&Juan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
