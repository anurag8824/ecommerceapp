import React from 'react';
import { FaHome, FaTags, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (

    <div className="flex flex-col min-h-screen">
    {/* Main Content */}
    
    <main className="flex-grow">
      {/* Your main content goes here */}
    </main>

        
    <footer className="bg-white dark:bg-gray-900 mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Desktop View */}
        <div className="hidden md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="infralogo.png" className="h-8 me-3" alt="Company Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Infayou Digital</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Company</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">About Us</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">FAQ's</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Mobile View */}
        <div className="fixed bottom-0 left-0 w-full flex md:hidden justify-around items-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-4">
          <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaHome size={24} />
            <span className="sr-only">Home</span>
          </a>
          <a href="/deals" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaTags size={24} />
            <span className="sr-only">My Order</span>
          </a>
          <a href="/profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaUser size={24} />
            <span className="sr-only">Wallet</span>
          </a>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Footer;

