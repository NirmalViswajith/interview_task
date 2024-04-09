import React, { useEffect, useState } from 'react';
import CompanyInfo from './Companyinfo.js';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  const toggleCompanyInfo = () => {
    setShowCompanyInfo(!showCompanyInfo);
    console.log(showCompanyInfo);
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    try {
      const response = await fetch('https://hoblist.com/api/movieList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch movie list');
      }

      const data = await response.json();
      console.log(data.result);
      setMovieList(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ml-10 py-8">
      <button onClick={toggleCompanyInfo} className="absolute top-4 right-4 z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Company Info
      </button>
      {showCompanyInfo && <CompanyInfo onClose={toggleCompanyInfo} />}
      <h1 className="text-3xl font-bold mb-8 -mt-4">Kannada Movie List</h1>
      {movieList.map(movie => (
        <div key={movie._id} className="border rounded p-4 mb-4 flex drop-shadow" style={{ width: '75%' }}>
          <div className="flex justify-center items-center">
            <div className="mx-4 w-16 text-center">
              <FontAwesomeIcon icon={faCaretUp} className='fa-2xl' />
              <p className="text-xl text-gray-800 mb-2">{movie.voting}</p>
              <FontAwesomeIcon icon={faCaretDown} className='fa-2xl' />
              <p>Votes</p>
            </div>
          </div>
          <div className="w-32 h-48 flex-shrink-0 mx-8">
            <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover drop-shadow-xl" />
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <p className="text-lg font-semibold mb-1">{movie.title}</p>
              <p className="text-sm text-gray-600 mb-1 ">Genre: {movie.genre}</p>
              <p className="text-sm text-gray-600 mb-1">Director: {movie.director}</p>
              <p className="text-sm text-gray-600 mb-1">Starring: {movie.stars.join(', ')}</p>
              <p className="text-sm text-gray-600 mb-1">{movie.runTime} Mins | {movie.language} | {new Date(movie.releasedDate).getDate()} {new Date(movie.releasedDate).toLocaleString('default', { month: 'short' })}</p>
            </div>
            <div className="text-sm text-blue-600">
              <p>{movie.pageViews} views | Voted by {movie.totalVoted} people</p>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Watch Trailer
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default HomePage;
