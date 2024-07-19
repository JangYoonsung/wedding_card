'use client';

const ImageSlider = () => {
  const images = ['/image/one.jpg', '/image/two.jpg', '/image/three.jpg', '/image/four.jpg'];

  return (
    <div className={`w-full`}>
      {images.map((image) => (
        <div key={image}>
          <img src={image} alt={image} className="w-full h-[350px] object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
