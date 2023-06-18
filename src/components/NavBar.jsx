import logo from "/logo.png";
import { useState, useEffect } from 'react';

function Header() {
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () => {
    setScroll(window.scrollY > 30);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full flex flex-row items-center justify-around md:py-5 py-3 z-40 ${scroll ? 'blurNav' : ''}`}
    >
      <img src={logo} alt="SPARCS" />
      <nav className="flex flex-row md:gap-10 gap-3 z-50">
        <a href="#about" className="text-white font-montserrat md:text-lg">About</a>
        <a href="#events" className="text-white font-montserrat md:text-lg">Events</a>
        <a href="#partners" className="text-white font-montserrat md:text-lg"
        >Partners</a
        >
        <a href="#contact" className="text-white font-montserrat md:text-lg">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
