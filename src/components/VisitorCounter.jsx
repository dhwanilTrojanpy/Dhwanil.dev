
import { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch('https://' + window.location.hostname + '/api/visitors')
      .then(response => response.json())
      .then(data => setVisitorCount(data.count))
      .catch(error => console.error('Error fetching visitor count:', error));
  }, []);

  return (
    <div className="fixed top-20 right-4 bg-black/80 text-white px-4 py-2 rounded-full z-50">
      Visitors: {visitorCount}
    </div>
  );
};

export default VisitorCounter;
