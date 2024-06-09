import { useState, useEffect } from 'react';

const useTests = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/tests')
      .then(response => response.json())
      .then(data => {
        setTests(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tests:', error);
        setLoading(false);
      });
  }, []);

  return { tests, loading };
};

export default useTests;
