import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Healthcare at Your Fingertips
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-lg">
              Connect with hospitals, join medical camps, request blood donations, and manage prescriptions - all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/search">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-100"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Find Hospitals
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-blue-800"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Healthcare professionals" 
              className="rounded-lg shadow-xl max-w-full h-auto"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;