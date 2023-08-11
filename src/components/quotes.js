import React, { useState, useEffect } from 'react';

const QuoteComponent = () => {
  const [quote, setQuote] = useState({
    quote: 'Non-violence requires a double faith, faith in God and also faith in man.',
    author: 'Mahatma Gandhi',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const quoteApi = await fetch('https://api.api-ninjas.com/v1/quotes?category=faith', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'X-Api-Key': 'AU7da7u0Juq/mKJbYvoBQw==YI9RvJWpSzEGKX6T',
          },
        });
        const result = await quoteApi.json();
        const dataArr = [result[0].quote, result[0].author];
        setQuote(dataArr);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
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
