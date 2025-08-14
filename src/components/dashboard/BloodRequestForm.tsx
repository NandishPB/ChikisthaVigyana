import React, { useState } from 'react';
import { Droplet, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

const BloodRequestForm: React.FC = () => {
  const { user } = useAuth();
  const [bloodType, setBloodType] = useState(user?.bloodType || '');
  const [urgency, setUrgency] = useState<'Normal' | 'Urgent' | 'Emergency'>('Normal');
  const [location, setLocation] = useState(user?.location || '');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <Droplet className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Blood Request Submitted</h3>
        <p className="text-green-700 mb-4">
          Your request for {bloodType} blood has been submitted successfully. We'll notify you when a donor is found.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitted(false)}
          className="border-green-600 text-green-700 hover:bg-green-50"
        >
          Make Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <div className="bg-red-100 p-2 rounded-full">
          <Droplet className="w-6 h-6 text-red-600" />
        </div>
        <h3 className="text-xl font-semibold ml-3">Request Blood Donation</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">
            Blood Type Required*
          </label>
          <select
            id="bloodType"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Blood Type</option>
            {bloodTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
            Urgency Level*
          </label>
          <select
            id="urgency"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value as 'Normal' | 'Urgent' | 'Emergency')}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Hospital/Location*
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter hospital or location"
            required
          />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                Your contact information will be shared with potential donors. Make sure your profile is up to date.
              </p>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          fullWidth 
          disabled={loading}
          className={`${urgency === 'Emergency' ? 'bg-red-600 hover:bg-red-700' : ''}`}
        >
          {loading ? (
            <>
              <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
              Processing...
            </>
          ) : (
            'Submit Blood Request'
          )}
        </Button>
      </form>
    </div>
  );
};

export default BloodRequestForm;