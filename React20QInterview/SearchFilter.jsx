import React, { useState } from "react";

const SearchFilter = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Strawberry",
  ];

  const [search, setSearch] = useState('');

  const filteredFruits = fruits.filter(fruits => 
    fruits.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Search filter element</h1>
      <input type="text" placeholder="Filter your item" value={search} onChange={(e) => setSearch(e.target.value)}/>
      
      <ul>
        {filteredFruits.length > 0 ? (
            filteredFruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))
        ):(
            <p>No results found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
