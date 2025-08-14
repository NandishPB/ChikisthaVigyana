import React, { useState, useEffect } from 'react';
import SearchBar from '../components/ui/SearchBar';
import SearchResults from '../components/search/SearchResults';
import { hospitals } from '../data/mockData';
import { Hospital } from '../types';
import { Filter } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    specialty: '',
    distance: ''
  });

  const specialties = [...new Set(hospitals.flatMap(hospital => hospital.specialties))].sort();
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const filteredResults = hospitals.filter(hospital => {
        const matchesQuery = query === '' || 
          hospital.name.toLowerCase().includes(query.toLowerCase()) ||
          hospital.location.toLowerCase().includes(query.toLowerCase()) ||
          hospital.specialties.some(s => s.toLowerCase().includes(query.toLowerCase()));
        
        const matchesSpecialty = filters.specialty === '' || 
          hospital.specialties.includes(filters.specialty);
        
        // Simple distance filter - in a real app this would be more sophisticated
        const matchesDistance = filters.distance === '' || 
          parseFloat(hospital.distance) <= parseFloat(filters.distance);
        
        return matchesQuery && matchesSpecialty && matchesDistance;
      });
      
      setResults(filteredResults);
      setLoading(false);
    }, 1000);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // Re-search when filters change
  useEffect(() => {
    handleSearch(searchQuery);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Hospitals & Medical Services</h1>
          <p className="text-gray-600 mb-6">
            Search by hospital name, location, or medical specialty to find the right healthcare provider for you.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <SearchBar 
              placeholder="Search hospitals, locations, or specialties..." 
              onSearch={handleSearch}
              className="mb-4"
            />
            
            <div className="flex items-center justify-between">
              <button 
                className="flex items-center text-blue-700 text-sm font-medium"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-1" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              {results.length > 0 && (
                <span className="text-sm text-gray-600">
                  Showing {results.length} results
                </span>
              )}
            </div>
            
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                    Specialty
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={filters.specialty}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Specialties</option>
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">
                    Distance (km)
                  </label>
                  <select
                    id="distance"
                    name="distance"
                    value={filters.distance}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Any Distance</option>
                    <option value="5">Within 5 km</option>
                    <option value="10">Within 10 km</option>
                    <option value="20">Within 20 km</option>
                    <option value="50">Within 50 km</option>
                  </select>
                </div>
              </div>
            )}
          </div>
          
          <SearchResults 
            results={results} 
            query={searchQuery} 
            loading={loading} 
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;