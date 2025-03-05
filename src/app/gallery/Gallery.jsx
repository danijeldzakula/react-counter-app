import { useState } from "react";

export default function Gallery() {
  const galleries = [
    {_id: '1', src: 'https://picsum.photos/id/239/600/300', country: 'Srbija'},
    {_id: '2', src: 'https://picsum.photos/id/238/600/300', country: 'Grcka'},
    {_id: '3', src: 'https://picsum.photos/id/240/600/300', country: 'Grcka'},
    {_id: '4', src: 'https://picsum.photos/id/241/600/300', country: 'Srbija'},
    {_id: '5', src: 'https://picsum.photos/id/242/600/300', country: 'Grcka'},
    {_id: '6', src: 'https://picsum.photos/id/243/600/300', country: 'Grcka'},
    {_id: '7', src: 'https://picsum.photos/id/244/600/300', country: 'Grcka'},
    {_id: '8', src: 'https://picsum.photos/id/254/600/300', country: 'Srbija'},
    {_id: '9', src: 'https://picsum.photos/id/255/600/300', country: 'Spanija'},
    {_id: '10', src: 'https://picsum.photos/id/247/600/300', country: 'Grcka'},
    {_id: '11', src: 'https://picsum.photos/id/248/600/300', country: 'Grcka'},
    {_id: '12', src: 'https://picsum.photos/id/249/600/300', country: 'Grcka'},
    {_id: '13', src: 'https://picsum.photos/id/250/600/300', country: 'Grcka'},
    {_id: '14', src: 'https://picsum.photos/id/251/600/300', country: 'Spanija'},
    {_id: '15', src: 'https://picsum.photos/id/252/600/300', country: 'Spanija'},
    {_id: '16', src: 'https://picsum.photos/id/253/600/300', country: 'Grcka'},
    {_id: '17', src: 'https://picsum.photos/id/258/600/300', country: 'Grcka'},
    {_id: '18', src: 'https://picsum.photos/id/259/600/300', country: 'Grcka'},
  ];

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCountry, setFilterCountry] = useState('All');

  const filteredGalleries = filterCountry === 'All' ? galleries : galleries.filter(({ country }) => country === filterCountry);

  const totalPages = Math.ceil(filteredGalleries.length / itemsPerPage);

  const getPagination = () => {
    const pages = [];
  
    pages.push(1);
  
    if (totalPages <= 5) {
      for (let i = 2; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      let middlePages = [];
  
      if (currentPage <= 2) {
        middlePages = [2, 3, 4];
      } else if (currentPage >= totalPages - 1) {
        middlePages = [totalPages - 3, totalPages - 2, totalPages - 1];
      } else {
        middlePages = [currentPage - 1, currentPage, currentPage + 1];
      }
  
      pages.push(...middlePages);
    }
  
    if (totalPages > 1) {
      pages.push(totalPages);
    }
  
    return pages;
  };
  
  const getAllCountries = () => {
    return ['All', ...new Set(galleries.filter(({ country }) => country).map(({ country }) => country))];
  };

  const currentItems = filteredGalleries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangeFilter = (value) => {
    setFilterCountry(value);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <div className="centred">
        {getAllCountries().map((country) => {
          return (
            <button
              type="button"
              onClick={() => handleChangeFilter(country)}
              key={country}
              className={`btn-default ${country === filterCountry ? 'isActive' : ''}`}
            >
              {country}
            </button>
          );
        })}
      </div>

      <div className="card-wrapper">
        {currentItems.map((gallery) => (
          <div key={gallery._id} className="relative">
            <img alt={gallery.country} src={gallery.src} />
            <div className="card-caption">{gallery.country}</div>
          </div>
        ))}
      </div>

      <div className="pagination" style={{ display: 'flex', gridGap: '8px' }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="btn-default"
        >
          Prev
        </button>

        {getPagination().map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            disabled={page === currentPage}
            className={`btn-default ${page === currentPage ? 'isActive' : ''}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="btn-default"
        >
          Next
        </button>
      </div>
    </div>
  );
}
