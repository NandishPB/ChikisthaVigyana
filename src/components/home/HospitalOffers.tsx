import React from 'react';
import { MapPin, Star } from 'lucide-react';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';
import { hospitals } from '../../data/mockData';

const HospitalOffers: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Offers from Hospitals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take advantage of these limited-time offers from our partner hospitals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.map((hospital) => (
            <Link to={`/hospital/${hospital.id}`} key={hospital.id}>
              <Card hoverEffect className="h-full overflow-hidden">
                <div className="relative h-48 bg-blue-100">
                  <img 
                    src={`https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750`} 
                    alt={hospital.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-700 text-white px-3 py-1 text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{hospital.name}</h3>
                  <div className="flex items-center mb-3 text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hospital.location} ({hospital.distance})</span>
                  </div>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">4.0 (120 reviews)</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Current Offers:</h4>
                    <ul className="space-y-2">
                      {hospital.offers.map((offer, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-4 w-4 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="ml-2 text-gray-700">{offer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalOffers;


