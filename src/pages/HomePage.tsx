import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import FeatureSection from '../components/home/FeatureSection';
import HospitalOffers from '../components/home/HospitalOffers';
import { Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <FeatureSection />
      <HospitalOffers />
      
      {/* Testimonial Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Real experiences from people who have used our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The medical camp booking feature saved me so much time. I got my health checkup done without any hassle.",
                name: "Priya Singh",
                location: "Rural District"
              },
              {
                quote: "When my father needed urgent blood, this app connected us with donors quickly. Forever grateful for this service.",
                name: "Rajesh Kumar",
                location: "Greenfield"
              },
              {
                quote: "I didn't know I was eligible for the government's health insurance scheme until I used this app. Now my treatments are covered!",
                name: "Anita Patel",
                location: "Westside"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg relative">
                <div className="absolute -top-4 left-6 bg-blue-700 p-2 rounded-full">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <blockquote className="mt-4">
                  <p className="text-blue-100 italic mb-4">"{testimonial.quote}"</p>
                  <footer className="text-blue-300">
                    <strong>{testimonial.name}</strong> • {testimonial.location}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to take control of your healthcare?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of users who have made healthcare management simpler with our platform.
          </p>
          <div className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
            Get Started Today
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;