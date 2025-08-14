import React from 'react';
import { Menu, X, Heart, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Heart className="w-8 h-8 text-blue-700 mr-2" />
            <span className="text-xl font-bold text-blue-900">HealthConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-blue-700 font-medium">
              Find Hospitals
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-700 font-medium">
                  Dashboard
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={logout}
                  className="flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="primary" size="sm">Login / Register</Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Hospitals
            </Link>
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 text-blue-700 font-medium hover:bg-blue-50 rounded-md"
              >
                Login / Register
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;