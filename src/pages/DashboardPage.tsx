import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { Calendar, Droplet, FileText, FileQuestion, Truck } from 'lucide-react';
import MedicalCampCard from '../components/dashboard/MedicalCampCard';
import BloodRequestForm from '../components/dashboard/BloodRequestForm';
import PrescriptionCard from '../components/dashboard/PrescriptionCard';
import SchemeCard from '../components/dashboard/SchemeCard';
import { hospitals, prescriptions, healthcareSchemes } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('medical-camps');

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const allCamps = hospitals.flatMap(hospital => hospital.camps);

  const handleBookSlot = (campId: string, slotId: string) => {
    // In a real app, this would make an API call to book the slot
    console.log(`Booking slot ${slotId} for camp ${campId}`);
    
    // For now, just show an alert
    alert(`Successfully booked slot for the medical camp!`);
  };

  if (!isAuthenticated || !user) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}</h1>
          <p className="text-gray-600">Manage your healthcare services from one place.</p>
        </div>

        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="bg-white rounded-lg shadow-sm p-1 border border-gray-200">
            <TabsTrigger 
              value="medical-camps"
              className="flex items-center"
              activeClass="bg-blue-50 text-blue-700"
              inactiveClass="text-gray-600 hover:text-gray-900"
            >
              <Calendar className="w-4 h-4 mr-1" />
              Medical Camps
            </TabsTrigger>
            <TabsTrigger 
              value="blood-donation"
              className="flex items-center"
              activeClass="bg-blue-50 text-blue-700"
              inactiveClass="text-gray-600 hover:text-gray-900"
            >
              <Droplet className="w-4 h-4 mr-1" />
              Blood Donation
            </TabsTrigger>
            <TabsTrigger 
              value="prescriptions"
              className="flex items-center"
              activeClass="bg-blue-50 text-blue-700"
              inactiveClass="text-gray-600 hover:text-gray-900"
            >
              <FileText className="w-4 h-4 mr-1" />
              Prescriptions
            </TabsTrigger>
            <TabsTrigger 
              value="medicine-delivery"
              className="flex items-center"
              activeClass="bg-blue-50 text-blue-700"
              inactiveClass="text-gray-600 hover:text-gray-900"
            >
              <Truck className="w-4 h-4 mr-1" />
              Medicine Delivery
            </TabsTrigger>
            <TabsTrigger 
              value="schemes"
              className="flex items-center"
              activeClass="bg-blue-50 text-blue-700"
              inactiveClass="text-gray-600 hover:text-gray-900"
            >
              <FileQuestion className="w-4 h-4 mr-1" />
              Healthcare Schemes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="medical-camps" className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Upcoming Medical Camps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCamps.map(camp => (
                <MedicalCampCard 
                  key={camp.id} 
                  camp={camp}
                  onBookSlot={handleBookSlot} 
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blood-donation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BloodRequestForm />
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Blood Donation Guidelines</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="ml-2 text-gray-700">You must be at least 18 years old to donate blood.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="ml-2 text-gray-700">You should weigh at least 50 kg.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="ml-2 text-gray-700">You must be in good health on the day of donation.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="ml-2 text-gray-700">Wait at least 3 months between blood donations.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="ml-2 text-gray-700">Eat a healthy meal and drink plenty of fluids before donating.</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="prescriptions">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">Your Prescriptions</h2>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Upload New Prescription
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prescriptions.map(prescription => (
                  <PrescriptionCard key={prescription.id} prescription={prescription} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="medicine-delivery">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Medicine Delivery Tracking</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Your Active Deliveries</h3>
                  
                  {prescriptions.flatMap(p => p.medicines).filter(m => m.deliveryStatus && m.deliveryStatus !== 'Delivered').length > 0 ? (
                    <div className="space-y-4">
                      {prescriptions.flatMap(p => p.medicines).filter(m => m.deliveryStatus && m.deliveryStatus !== 'Delivered').map(medicine => (
                        <div key={medicine.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-gray-900">{medicine.name} - {medicine.dosage}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              medicine.deliveryStatus === 'Shipped' 
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {medicine.deliveryStatus}
                            </span>
                          </div>
                          
                          <div className="mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-blue-600 h-2.5 rounded-full" 
                                style={{ width: medicine.deliveryStatus === 'Shipped' ? '75%' : '50%' }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs mt-1 text-gray-500">
                              <span>Ordered</span>
                              <span>Processing</span>
                              <span>Shipped</span>
                              <span>Delivered</span>
                            </div>
                          </div>
                          
                          <div className="text-sm text-gray-600">
                            <p>Expected delivery: {new Date().getDate() + 2} {new Date().toLocaleString('default', { month: 'short' })}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-gray-400 mb-2">
                        <Truck className="w-12 h-12 mx-auto" />
                      </div>
                      <p className="text-gray-600">You don't have any active medicine deliveries.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schemes">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Government Healthcare Schemes</h2>
              <p className="text-gray-600 mb-4">
                Learn about various healthcare schemes that you may be eligible for.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthcareSchemes.map(scheme => (
                  <SchemeCard key={scheme.id} scheme={scheme} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;