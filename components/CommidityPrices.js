import React, { useEffect, useState } from 'react';

function CommodityPrices() {
  const [prices, setPrices] = useState({
    silver: null,
    gold: null,
    platinum: null,
  });

  useEffect(() => {
    // Function to generate a random price within a specified range
    const generateDummyPrice = (min, max) => {
      return (Math.random() * (max - min) + min).toFixed(2);
    };

    // Function to update prices for each commodity
    const updatePrices = () => {
      setPrices({
        silver: generateDummyPrice(20, 30),
        gold: generateDummyPrice(1800, 2000),
        platinum: generateDummyPrice(900, 1100),
      });
    };

    // Initial price setting
    updatePrices();

    // Set up polling to update prices every second
    const interval = setInterval(updatePrices, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-white text-mainColor flex items-center justify-around w-full p-6">
      {prices.silver && prices.gold && prices.platinum ? (
        <>
          <div>Silver: ${prices.silver}</div>
          <div>Gold: ${prices.gold}</div>
          <div>Platinum: ${prices.platinum}</div>
        </>
      ) : (
        'Loading prices...'
      )}
    </div>
  );
}

export default CommodityPrices;
