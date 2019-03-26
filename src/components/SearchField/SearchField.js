import React, { useState } from 'react'

import TextInput from '../TextInput';
import Button from '../Button';

import './SearchField.css';

const SearchField = ({ action }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    action(searchText, 5);
  }

  return (
    <form className="SearchField" onSubmit={handleSearch}>
      <TextInput 
        placeholder="Enter a stock symbol"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />

      <Button onClick={handleSearch}>Search</Button>
    </form>
  );
}

export default SearchField;