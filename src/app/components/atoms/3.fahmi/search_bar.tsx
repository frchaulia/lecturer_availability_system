import React from 'react';

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
    </div>
    
  );
};

export default SearchBar;
