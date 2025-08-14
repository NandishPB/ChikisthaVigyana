import React, { useState } from 'react';
import { FileQuestion, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import { HealthcareScheme } from '../../types';
import Button from '../ui/Button';

interface SchemeCardProps {
  scheme: HealthcareScheme;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme }) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Maternity': return 'bg-pink-100 text-pink-800';
      case 'Disability': return 'bg-purple-100 text-purple-800';
      case 'Insurance': return 'bg-blue-100 text-blue-800';
      case 'Senior Citizens': return 'bg-orange-100 text-orange-800';
      case 'Children': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full">
              <FileQuestion className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 ml-3">{scheme.name}</h3>
          </div>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getCategoryColor(scheme.category)}`}>
            {scheme.category}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{scheme.description}</p>

        <button 
          className="flex items-center justify-between w-full text-blue-700 hover:text-blue-800 font-medium text-sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Show More Details'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Eligibility:</h4>
              <p className="text-gray-700 text-sm">{scheme.eligibility}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {scheme.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-3 w-3 mt-1.5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="ml-2">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={scheme.applicationLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2"
            >
              <Button variant="primary" size="sm" className="flex items-center">
                Apply Now
                <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SchemeCard;