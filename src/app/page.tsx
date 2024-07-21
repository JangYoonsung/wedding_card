'use client';

import FormLink from '@/container/FormLink';
import Information from '@/container/Information';
import LocationInfo from '@/container/LocationInfo';
import PhotoGallery from '@/container/PhotoGallery';
import Top from '@/container/Top';
import WelcomeNote from '@/container/WelcomeNote';
import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="h-full bg-bg_primary grid gap-6">
      <Top />

      <WelcomeNote />

      <PhotoGallery />

      <Information />

      <LocationInfo />

      <FormLink />
    </main>
  );
};

export default Home;
