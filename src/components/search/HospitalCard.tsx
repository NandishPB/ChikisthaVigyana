import React from 'react';
import { MapPin, Award, Calendar } from 'lucide-react';
import Card from '../ui/Card';
import { Hospital } from '../../types';
import { Link } from 'react-router-dom';

interface HospitalCardProps {
  hospital: Hospital;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <Card hoverEffect className="h-full border border-gray-200">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{hospital.name}</h3>
        <div className="flex items-center mb-3 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{hospital.location} ({hospital.distance})</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <Award className="w-4 h-4 mr-1 text-blue-700" />
            Specialties:
          </h4>
          <div className="flex flex-wrap gap-2 mb-3">
            {hospital.specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        {hospital.camps.length > 0 && (
          <div className="border-t border-gray-200 pt-3 mt-3">
            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-blue-700" />
              Upcoming Medical Camps:
            </h4>
            <ul className="space-y-2">
              {hospital.camps.map((camp) => (
                <li key={camp.id} className="text-sm">
                  <Link 
                    to={`/medical-camps/${camp.id}`}
                    className="text-blue-700 hover:underline"
                  >
                    {camp.name} - {new Date(camp.date).toLocaleDateString()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4">
          <Link 
            to={`/hospital/${hospital.id}`}
            className="text-blue-700 hover:underline font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default HospitalCard;