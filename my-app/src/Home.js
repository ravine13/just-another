import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KohlsData = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://kohls.p.rapidapi.com/categories/list',
        headers: {
          'X-RapidAPI-Key': '4ae133fd1cmsh2a039f2404ac4d4p151c95jsn34fc412a8355',
          'X-RapidAPI-Host': 'kohls.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Kohl's Data</h1>
      <ul>
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <li key={index}>{category.name}</li>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
    </div>
  );
};

export default KohlsData; // Moved the export statement to the correct position
