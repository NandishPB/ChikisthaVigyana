import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-blue-300 mr-2" />
              <h3 className="text-xl font-bold">HealthConnect</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Connecting rural communities with quality healthcare services and resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-blue-200 hover:text-white transition-colors">
                  Find Hospitals
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-blue-200 hover:text-white transition-colors">
                  Patient Dashboard
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-blue-200 hover:text-white transition-colors">
                  Healthcare Schemes
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/medical-camps" className="text-blue-200 hover:text-white transition-colors">
                  Medical Camps
                </Link>
              </li>
              <li>
                <Link to="/blood-requests" className="text-blue-200 hover:text-white transition-colors">
                  Blood Donation
                </Link>
              </li>
              <li>
                <Link to="/prescriptions" className="text-blue-200 hover:text-white transition-colors">
                  Medicine Delivery
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-blue-200 hover:text-white transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-blue-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-blue-200">support@healthconnect.org</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-300 mr-2 mt-1" />
                <span className="text-blue-200">123 Healthcare Avenue, Medical District, Country</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} HealthConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;