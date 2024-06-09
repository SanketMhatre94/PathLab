import React, { useEffect, useState } from 'react';
import LabList from './LabList';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function CategoryLab() {
  const [labs, setLabs] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardsPerRow = 4; // Fixed number of cards per row

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setLabs(data))
      .catch(error => console.error('Error fetching lab data:', error));
  }, []);

  const scroll = (scrollOffset) => {
    const container = document.getElementById('labListContainer');
    const newScrollPosition = scrollPosition + scrollOffset;
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newScrollPosition);
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = labs.length > scrollPosition / 300 + cardsPerRow;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold my-4">Top Wellness Packages</h1>
      </header>
      <div className="flex items-center justify-between">
        <button
          onClick={() => scroll(-1200)} // Scroll 4 cards at a time
          disabled={!canScrollLeft}
          className={`${canScrollLeft ? 'opacity-100' : 'opacity-50'}`}
        >
          <FaArrowLeft />
        </button>
        <div id="labListContainer" className="flex overflow-x-auto">
          <LabList labs={labs} cardsPerRow={cardsPerRow} />
        </div>
        <button
          onClick={() => scroll(1200)} // Scroll 4 cards at a time
          disabled={!canScrollRight}
          className={`${canScrollRight ? 'opacity-100' : 'opacity-50'}`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default CategoryLab;