import { Link } from 'react-router-dom';

export default function Categories() {
  const categories = [
    {
      _id: '1',
      href: 'laptop',
      image: { placeholder: 'https://picsum.photos/id/239/600/300' },
      title: 'Laptop',
    },
    {
      _id: '2',
      href: 'desktop',
      image: { placeholder: 'https://picsum.photos/id/240/600/300' },
      title: 'Desktop',
    },
    {
      _id: '3',
      href: 'accessories',
      image: { placeholder: 'https://picsum.photos/id/241/600/300' },
      title: 'Accessories',
    },
    {
      _id: '4',
      href: 'gaming',
      image: { placeholder: 'https://picsum.photos/id/242/600/300' },
      title: 'Gaming',
    },
    {
      _id: '5',
      href: 'tv-audio-video',
      image: { placeholder: 'https://picsum.photos/id/243/600/300' },
      title: 'TV, audio, video',
    },
    {
      _id: '6',
      href: 'mobile',
      image: { placeholder: 'https://picsum.photos/id/244/600/300' },
      title: 'Mobile',
    },
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category) => {
            return (
              <div key={category._id} className="group relative">
                <img
                  className="block w-full"
                  src={category.image.placeholder}
                  alt={category.title}
                />

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/75 to-transparent p-4 transition-all group-hover:py-6">
                  <h3 className="text-3xl text-white">{category.title}</h3>
                </div>

                <Link to={category.href} className="absolute inset-0">
                  <span className="sr-only">{category.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
