import React from 'react';
import { Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { MedicalCamp } from '../../types';

interface MedicalCampCardProps {
  camp: MedicalCamp;
  onBookSlot: (campId: string, slotId: string) => void;
}

const MedicalCampCard: React.FC<MedicalCampCardProps> = ({ camp, onBookSlot }) => {
  const campDate = new Date(camp.date);
  const formattedDate = campDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const availableSlots = camp.slots.filter(slot => slot.available);

  return (
    <Card className="h-full">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{camp.name}</h3>
            <div className="flex items-center mt-2 text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm">{formattedDate}</span>
            </div>
            <div className="flex items-center mt-1 text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{camp.location}</span>
            </div>
          </div>
          <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {availableSlots.length} slots available
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Services Offered:</h4>
          <div className="flex flex-wrap gap-2">
            {camp.services.map((service, index) => (
              <span 
                key={index} 
                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-medium text-gray-900 mb-3">Available Time Slots:</h4>
          <div className="grid grid-cols-2 gap-2">
            {camp.slots.map((slot) => (
              <div key={slot.id} className="relative">
                <Button
                  variant={slot.available ? "outline" : "primary"}
                  size="sm"
                  fullWidth
                  onClick={() => slot.available && onBookSlot(camp.id, slot.id)}
                  disabled={!slot.available}
                  className={`${
                    !slot.available 
                      ? 'bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed'
                      : ''
                  }`}
                >
                  <Clock className="w-4 h-4 mr-1" />
                  {slot.time}
                  {!slot.available && (
                    <CheckCircle className="w-4 h-4 ml-1 text-blue-700" />
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MedicalCampCard;