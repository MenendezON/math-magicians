import React, { useState, useEffect } from 'react';
import keys from '../config';

const QuoteComponent = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch quote data from the API using X-Api-Key header
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: {
        'X-Api-Key': keys.APIKEY,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      Quote : &quot;
      {quote}
      &quot;
    </div>
  );
};

export default QuoteComponent;
