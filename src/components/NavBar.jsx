import logo from "/logo.png";
import logo_word from "/logo_word.png";
import { useState, useEffect } from 'react';

function Header() {
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () => {
    setScroll(window.scrollY > 30);
  }

  const width = window.innerWidth;
  
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
  }, []);

  const sparcs_word = <img src={logo_word} alt="SPARCS" className="h-16" />;
  const sparcs_s = <img src={logo} alt="SPARCS" className="w-16" />;

  return (
    <header
      className={`fixed top-0 w-full flex flex-row items-center justify-around md:py-5 py-3 z-40 ${scroll ? 'blurNav' : ''}`}
    >
      <a href="#sparcs">
        {width > 768 ? sparcs_word : sparcs_s}
      </a>
      <nav className="flex flex-row md:gap-10 gap-3 z-50">
        <a href="#about" className="text-white font-montserrat md:text-lg group transition duration-300">
          About
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </a>
        <a href="#events" className="text-white font-montserrat md:text-lg group transition duration-300">
          Events
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </a>
        <a href="#partners" className="text-white font-montserrat md:text-lg group transition duration-300">
          Partners
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </a>
        <a href="#contact" className="text-white font-montserrat md:text-lg group transition duration-300">
          Contact
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
