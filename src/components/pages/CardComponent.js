
import React, { useState } from 'react';

const VerticalCardComponent = () => {
  // Define state to manage the current image
  const [currentImage, setCurrentImage] = useState('/order.png');

  // Define the images for each card
  const images = [
    '/order.png', // Image for card 1
    '/update.png',     // Image for card 2
    '/wallet.png',       // Image for card 3
  ];

  // Handle the card click to change the image
  const handleCardClick = (index) => {
    setCurrentImage(images[index]);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-4 md:mb-0">
        <div
          className="h-80 w-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          <img
            alt=""
            src={currentImage}
            className="object-cover h-full w-full"
            draggable="false"
          />
        </div>
      </div>

      {/* Vertical Numbers Section */}
      <div className="md:w-1/2 w-full flex flex-col space-y-4 items-start md:items-end">
        {/* Card 1 */}
        <div
          onClick={() => handleCardClick(0)}
          className="cursor-pointer bg-gray-900 rounded-xl shadow-lg p-4 text-white w-full md:w-2/3"
        >
          <div className="text-4xl font-medium">1.</div>
          <div className="mt-2">
            <div className="font-medium">No sharing of card details</div>
            <div className="text-gray-500 font-light">You never share your credit card details with Yaper or anyone else</div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => handleCardClick(1)}
          className="cursor-pointer bg-gray-900 rounded-xl text-white shadow-lg p-4 w-full md:w-2/3"
        >
          <div className="text-4xl font-medium">2.</div>
          <div className="mt-2">
            <div className="font-medium">Orders placed on leading e-commerce platforms</div>
            <div className="text-gray-500 font-light">All orders are directly placed by you on leading platforms like Amazon, Flipkart</div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => handleCardClick(2)}
          className="cursor-pointer bg-gray-900 rounded-xl text-white shadow-lg p-4 w-full md:w-2/3"
        >
          <div className="text-4xl font-medium">3.</div>
          <div className="mt-2">
            <div className="font-medium">Payment secured in wallet</div>
            <div className="text-gray-500 font-light">Payment transferred to Yaper wallet immediately on placing orders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCardComponent;

