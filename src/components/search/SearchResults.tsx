import React from 'react';
import { AlertCircle } from 'lucide-react';
import HospitalCard from './HospitalCard';
import { Hospital } from '../../types';

interface SearchResultsProps {
  results: Hospital[];
  query: string;
  loading: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, query, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-4">
          <AlertCircle className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Results Found</h3>
        <p className="text-gray-600">
          We couldn't find any hospitals matching "{query}". Please try a different search term.
        </p>
      </div>
    );
  }

  if (results.length === 0 && !query) {
    return null;
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">
        {results.length} {results.length === 1 ? 'Hospital' : 'Hospitals'} Found
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;