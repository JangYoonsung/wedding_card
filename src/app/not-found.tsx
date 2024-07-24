import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="">
        <Title text="404" fontSize="3xl" color="primary" />
        <Title text="Page Not Found" fontSize="xl" color="primary" />
        <p className="word-break whitespace-pre-wrap py-4 text-gray">
          {`存在しないURLを入力したか、お探しのページのURLが変更
または削除されているため表示することができません。`}
        </p>
        <Link href="/" className="text-gray font-bold">
          TOPへ戻る
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
