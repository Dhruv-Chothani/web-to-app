
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-neutral-200/50">
      <div className="container-max px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="ri-smartphone-line text-white text-xl"></i>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display gradient-text">Web2App</span>
              <span className="text-xs text-neutral-500 font-medium">Transform. Deploy. Scale.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-all duration-300 hover:text-primary-600 group ${
                  isActive(link.path)
                    ? 'text-primary-600'
                    : 'text-neutral-600'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 group-hover:w-full ${
                  isActive(link.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-secondary">
              Sign In
            </button>
            <button className="btn-primary">
              Get Started
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors duration-300 rounded-xl hover:bg-neutral-100"
          >
            <i className={`text-xl transition-transform duration-300 ${isMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in-down">
            <div className="py-6 border-t border-neutral-200">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-all duration-300 hover:text-primary-600 px-4 py-2 rounded-xl hover:bg-primary-50 ${
                      isActive(link.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-neutral-200">
                  <button className="btn-secondary mx-4">
                    Sign In
                  </button>
                  <button className="btn-primary mx-4">
                    Get Started
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
