import React from 'react';
import { Calendar, Droplet, FileText, Truck, FileQuestion } from 'lucide-react';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, linkTo }) => {
  return (
    <Link to={linkTo}>
      <Card hoverEffect className="h-full p-6 flex flex-col items-center text-center">
        <div className="bg-blue-100 p-3 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </Link>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: 'Medical Camps',
      description: 'Find and book slots at upcoming medical camps in your area.',
      icon: <Calendar className="w-6 h-6 text-blue-700" />,
      linkTo: '/medical-camps'
    },
    {
      title: 'Blood Donation',
      description: 'Request blood donations or register yourself as a donor.',
      icon: <Droplet className="w-6 h-6 text-blue-700" />,
      linkTo: '/blood-requests'
    },
    {
      title: 'Prescriptions',
      description: 'Upload prescriptions and get medicines delivered to your doorstep.',
      icon: <FileText className="w-6 h-6 text-blue-700" />,
      linkTo: '/prescriptions'
    },
    {
      title: 'Medicine Delivery',
      description: 'Track your medicine delivery status in real-time.',
      icon: <Truck className="w-6 h-6 text-blue-700" />,
      linkTo: '/medicine-delivery'
    },
    {
      title: 'Healthcare Schemes',
      description: 'Learn about government healthcare schemes you may be eligible for.',
      icon: <FileQuestion className="w-6 h-6 text-blue-700" />,
      linkTo: '/schemes'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed to make quality healthcare accessible to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;