import React from 'react';

const CompanyInfo = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Company Information</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-900 font-bold">Company:</p>
            <p className="text-lg">Geeksynergy Technologies Pvt Ltd</p>
          </div>
          <div>
            <p className="text-gray-900 font-bold">Address:</p>
            <p className="text-lg">Sanjayanagar, Bengaluru-56</p>
          </div>
          <div>
            <p className="text-gray-900 font-bold">Phone:</p>
            <p className="text-lg">XXXXXXXXX09</p>
          </div>
          <div>
            <p className="text-gray-900 font-bold">Email:</p>
            <p className="text-lg">XXXXXX@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
