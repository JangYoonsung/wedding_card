'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { Fragment, useEffect } from 'react';

const ImageSlider = () => {
  const images = ['/image/one.jpg', '/image/two.jpg', '/image/three.jpg', '/image/four.jpg'];

  const [emblaRef, embla] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  useEffect(() => {
    if (!embla) return;
  }, [embla]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-col flex-wrap flex-none h-[286px]">
          {images.map((slide, index) => (
            <Fragment key={index}>
              <img src={slide} alt="" className="w-full h-[280px] object-scale-down" />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
