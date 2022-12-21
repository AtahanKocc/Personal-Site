import React from 'react';
import moodmusic from '../assets/portfolio/moodmusic.png';
import Dashboard from '../assets/portfolio/dashboard.png';
import magazine from '../assets/portfolio/magazine.png';
import emotion from '../assets/portfolio/emotion.png';
import BloodDonation from '../assets/portfolio/maxresdefault.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: moodmusic,
      github: 'https://github.com/AtahanKocc/Digital_Music_Platform',
    },
    {
      id: 2,
      src: Dashboard,
      github: 'https://github.com/AtahanKocc/Dashboard',
    },
    {
      id: 3,
      src: magazine,
      github: 'https://github.com/AtahanKocc/MagazineWebsite',
    },
    {
      id: 4,
      src: emotion,
      github: 'https://github.com/AtahanKocc/Emotion-Recognition-For-AI-Assisted-Student-Counseling-',
    },
    {
      id:5,
      src:BloodDonation,
      github:'https://github.com/AtahanKocc/BloodDonation'
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={github}>
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              </a>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github}> Code </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
