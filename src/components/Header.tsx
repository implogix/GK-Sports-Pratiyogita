import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Trophy, BookOpen } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Registration', path: '/registration' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Supporters', path: '/supporters' },
    { name: 'Results', path: '/results' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-blue-600" />
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">GK & Sports</h1>
              <p className="text-sm text-gray-600">Pratiyogita 2025</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-gradient-to-r from-blue-600 to-green-600">
              <Link to="/registration">Register Now</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-gradient-to-r from-blue-600 to-green-600 w-fit">
                <Link to="/registration" onClick={() => setIsMenuOpen(false)}>
                  Register Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}