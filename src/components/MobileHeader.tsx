import { useState } from 'react';
import {nameLogo} from '../data/siteData.json';

const MobileHeader = () => {
  const logo = nameLogo;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 bg-white flex justify-between px-6 py-2 md:hidden'>
        <a href="/" className='flex gap-6 items-center'>
          <img src="../../public/images/jgu_profile.jpeg" alt="jgu" className="rounded-full h-12"></img>
          <h1 className="text-2xl font-bold">{logo}</h1>
        </a>

        <button className="" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen ? (
        <nav className="flex flex-col items-center gap-12 fixed left-0 right-0 py-24 bg-white shadow-xl rounded-b-3xl">
          <a href="/">Home</a>
          <a href="/whoami">Whoami</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
          <a href="/now">Now</a>
        </nav>
      ) : ('')}
    </div>
  );
};

export default MobileHeader;
