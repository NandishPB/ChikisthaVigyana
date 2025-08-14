import React from 'react';
import { FileText, Pill, Calendar, User } from 'lucide-react';
import Card from '../ui/Card';
import { Prescription } from '../../types';

interface PrescriptionCardProps {
  prescription: Prescription;
}

const PrescriptionCard: React.FC<PrescriptionCardProps> = ({ prescription }) => {
  const prescriptionDate = new Date(prescription.date);
  const formattedDate = prescriptionDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="h-full">
      <div className="border-b border-gray-200 bg-blue-50 p-4">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-full">
            <FileText className="w-5 h-5 text-blue-700" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-800">Prescription</h3>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center mb-4">
          <User className="w-4 h-4 mr-2 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{prescription.doctorName}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{prescription.hospitalName}</span>
        </div>

        <h4 className="font-medium text-gray-900 mb-2">Medicines:</h4>
        <div className="space-y-3 mb-4">
          {prescription.medicines.map((medicine) => (
            <div key={medicine.id} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <Pill className="w-4 h-4 mt-0.5 mr-2 text-blue-700" />
                <div>
                  <div className="font-medium text-gray-800">{medicine.name}</div>
                  <div className="text-sm text-gray-600">{medicine.dosage} - {medicine.frequency}</div>
                  <div className="text-sm text-gray-600">Duration: {medicine.duration}</div>
                  
                  {medicine.deliveryStatus && (
                    <div className="mt-2">
                      <span className="text-xs font-medium mr-2">Delivery Status:</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        medicine.deliveryStatus === 'Delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : medicine.deliveryStatus === 'Shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {medicine.deliveryStatus}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {prescription.instructions && (
          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
            <p className="text-gray-700 text-sm bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              {prescription.instructions}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PrescriptionCard;