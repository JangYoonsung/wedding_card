'use client';

import Card from '@/components/Card';
import Title from '@/components/Title';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const PhotoGallery: React.FC = () => {
  const images = [
    { id: 1, value: '/image/one.jpg' },
    { id: 2, value: '/image/two.jpg' },
    { id: 3, value: '/image/three.jpg' },
    { id: 4, value: '/image/four.jpg' },
    { id: 5, value: '/image/five.jpg' },
    { id: 6, value: '/image/main.jpg' },
    { id: 7, value: '/image/six.jpg' },
    { id: 8, value: '/image/seven.jpg' },
    { id: 9, value: '/image/eight.jpg' },
  ];

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  return (
    <Card color="none" useAnimation>
      <Title text="Photo Gallery" color="gray" classes="font-play-fair mb-2" fontSize="2xl" />

      <Slider
        className="aspect-w-1 aspect-h-1"
        dots={settings.dots}
        arrows={settings.arrows}
        infinite={settings.infinite}
        adaptiveHeight={settings.adaptiveHeight}
        autoplay={settings.autoplay}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}>
        {images.map((image) => (
          <div className="aspect-w-1 aspect-h-1" key={image.id}>
            <Image
              src={image.value}
              alt={`${image.id}-${image.value}`}
              className="object-cover"
              fill
            />
          </div>
        ))}
      </Slider>
    </Card>
  );
};

export default PhotoGallery;
