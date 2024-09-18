import React from 'react'
import { useState } from 'react';
import Carousel from './Carousel';
import CardComponent from './CardComponent';
import ReviewPage from './ReviewPage';




const HomePage = () => {

  // TrendingOffers.js

  const offers = [
    {
      id: 1,
      title: 'Earn Rs. 300',
      description: 'by using your ICICI Bank card',
      details: 'More than 200 users have earned Rs. 70,000 in the last 30 days',
      // image: 'icici.png',
      bgColor: 'bg-red-500',
    },
    {
      id: 2,
      title: 'Earn Rs. 600',
      description: 'by using your HDFC Mahindra Bank card',
      details: 'More than 100 users have earned Rs. 50,000 in the last 30 days',
      // image: 'hdfc.png',
      bgColor: 'bg-purple-500',
    },

    {
      id: 3,
      title: 'Earn Rs. 600',
      description: 'by using your Axis Bank card',
      details: 'More than 100 users have earned Rs. 50,000 in the last 30 days',
      // image: 'axis.png',
      bgColor: 'bg-blue-500',
    },

    {
      id: 4,
      title: 'Earn Rs. 600',
      description: 'by using your Kotak Mahindra Bank card',
      details: 'More than 100 users have earned Rs. 50,000 in the last 30 days',
      // image: 'kotak.png',
      bgColor: 'bg-yellow-500',
    },

    {
      id: 5,
      title: 'Earn Rs. 600',
      description: 'by using your One card',
      details: 'More than 100 users have earned Rs. 50,000 in the last 30 days',
      // image: 'one.png',
      bgColor: 'bg-gray-500',
    },
    // Add more offers if needed
  ];


  //reviews list.js
  const reviews = [
    {
      id: 1,
      name: 'Ashok',
      description: 'by using your ICICI Bank card',
      details: 'More than 200 users have earned Rs. 70,000 in the last 30 days',
      // image: 'icici.png',
      bgColor: 'bg-red-500',
    },
    {
      id: 2,
      name: 'Shantanu',
      description: 'by using your HDFC Mahindra Bank card',
      details: 'More than 100 users have earned Rs. 50,000 in the last 30 days',
      // image: 'hdfc.png',
      bgColor: 'bg-purple-500',
    },

    {
      id: 3,
      name: 'Bhavesh',
      description: 'by using your Axis Bank card',
      details: 'More than 100 users have earned Rs. 50,000 in the last 30 days',
      // image: 'axis.png',
      bgColor: 'bg-blue-500',
    },

    {
      id: 4,
      name: 'Arpit',
      description: 'by using your Kotak Mahindra Bank card',
      details: 'More than 100 users have earned Rs. 50,000 in the last 30 days',
      // image: 'kotak.png',
      bgColor: 'bg-yellow-500',
    },

    {
      id: 5,
      name: 'Lakshay',
      description: 'by using your One card',
      details: 'More than 100 users have earned Rs. 50,000 in the last 30 days',
      // image: 'one.png',
      bgColor: 'bg-gray-500',
    },
    // Add more offers if needed
  ];



  const [current, setCurrent] = useState(0);

  const nextOffer = () => {
    setCurrent((current + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrent((current - 1 + offers.length) % offers.length);
  };

  const nextReview = () => {
    setCurrent((current + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((current - 1 + reviews.length) % reviews.length);
  };



  return (
    <div>

      {/* top home */}

      <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl md:flex pt-12">
        <div class="px-3 flex flex-col md:flex-row md:items-center">
          <div class="p-8 md:w-2/3">
            <div class="uppercase tracking-wide text-4xl text-indigo-500 font-bold text-justify">Earn cash</div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black text-justify">from your Credit Cards and Maximise your Rewards too!</p>
            <p class="mt-2 text-slate-500 text-justify">Use your cards to order for others and earn on every order</p>
          </div>
          <div class="md:w-1/3">
            {/* <img class="h-48 w-full object-cover md:h-full md:w-48" src="./sideimage.png" alt="Modern building architecture" /> */}
            <Carousel />

          </div>
        </div>
      </div>


      {/* How it works from here  */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">How it Works</h2>

          <p className="mb-12 text-lg text-gray-700">
            Yaper is built by credit card enthusiasts for maximizing the benefits from credit cards
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="mb-4">
                <img src="order.png" alt="Order for Others" className="mx-auto" />
              </div>

              <h3 className="text-xl font-semibold mb-2">Order for Others</h3>
              <p className="text-gray-600">
                Order for shoppers on shopping platforms using discount available on your card
              </p>

            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="mb-4">
                <img src="update.png" alt="Update Order Details" className="mx-auto" />
              </div>

              <h3 className="text-xl font-semibold mb-2">Update Order Details</h3>
              <p className="text-gray-600">
                Update order, tracking, and delivery details on the app
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="mb-4">
                <img src="receive.png" alt="Receive Cash" className="mx-auto" />
              </div>

              <h3 className="text-xl font-semibold mb-2">Receive Cash</h3>

              <p className="text-gray-600">
                Get cash in your bank account after the order is delivered to the shopper
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* trending offers section from here */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Trending Offers</h2>
          <p className="mb-8 text-lg text-gray-400">
            Check out the latest trending offers and start your rewarding journey
          </p>
          <div className="relative flex items-center justify-center">

            {/* Previous Button */}
            <button
              onClick={prevOffer}
              className="absolute left-0 z-10 p-2 bg-yellow-500 rounded-full focus:outline-none"
            >
              &#9664;
            </button>

            {/* Offer Card */}
            <div className={`p-6 mx-2 rounded-lg shadow-md flex items-center ${offers[current].bgColor}`}>
              {/* <img src={offers[current]} alt={offers[current].title} className="w-12 h-12 mr-4" /> */}
              <div className="text-left">
                <h3 className="text-xl font-semibold">{offers[current].title}</h3>
                <p>{offers[current].description}</p>
                <p className="text-sm mt-2 text-gray-200">{offers[current].details}</p>
              </div>
            </div>


            {/* Next Button */}

            <button
              onClick={nextOffer}
              className="absolute right-0 z-10 p-2 bg-yellow-500 rounded-full focus:outline-none"
            >
              &#9654;
            </button>


          </div>
        </div>
      </section>


      {/* Safety guides from here  */}
      <CardComponent />


      {/* review section from here */}

      <section>

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-8">What our Users are Saying about us?</h2>
          <p className="mb-2 text-lg text-gray-400">
            Read what our users are saying about the app on the Google Play store and the App Store
          </p>

          <div className="relative flex items-center justify-center">
            <div>
              <ReviewPage />
            </div>
          </div>
        </div>

      </section>

      {/* end section */}

      <div class="flex flex-col md:flex-row">
        <div class="flex-1 p-4 items-center justify-center">
          <h1 class="text-2xl font-bold mb-2 my-10">Don't have the Right Credit Card?</h1>
          <p class="mb-2">Don't worry! Our platform, Grab Credit Cards</p>
          <p class="mb-2">would help you get the most suitable card</p>
          <p class="mb-2">which you can use to earn Cash and Rewards
          </p>
        </div>
        <div class="flex-1 p-4">
          <img src="./credit.png" alt="Placeholder Image" class="w-full h-auto object-cover" />
        </div>
      </div>

    </div>
  )
}


export default HomePage