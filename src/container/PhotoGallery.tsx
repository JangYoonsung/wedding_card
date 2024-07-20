import Card from '@/components/Card';
import Title from '@/components/Title';

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

  return (
    <Card color="none" useAnimation>
      <Title text="Photo Gallery" color="gray" />

      <div className="grid grid-cols-3 gap-2">
        {images.map((image) => (
          <div key={image.id} className="aspect-w-1 aspect-h-1">
            <img src={image.value} alt="" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PhotoGallery;
