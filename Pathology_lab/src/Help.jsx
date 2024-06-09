// import React from 'react'

// function Help() {
//   return (
//    <>
//    <div className="bg-gray-100 p-6 min-h-screen flex items-center justify-center">
//       <HelpCard />
//     </div>
//    </>
//   )
// }
//  function HelpCard(){
//   return(
//     <>
//     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="px-6 py-4">
//         <h2 className="text-xl font-bold mb-2">Need Help?</h2>
//         <p className="text-gray-700 text-base mb-4">
//           If you have any questions or need assistance, please don't hesitate to contact us. We're here to help you!
//         </p>
//         <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
//           Contact Support
//         </button>
//       </div>
//     </div>
    
    
    
    
//     </>
//   )
//  }

// export default Help



import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
        <div className="bg-blue-100 rounded-full p-4 mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 text-blue-500 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 7v-5m0 5V5m0 16l-9-5 9 5zm0 0l9-5-9 5z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">We're here to help!</h2>
        <p className="mb-6 text-gray-600">
          If you have any queries related to any of our tests or packages, you can contact us on the below mentioned phone number or email.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h6l7 10h5"
              />
            </svg>
            <span className="text-lg font-medium">Call: 898 898 8787</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 2.318a4 4 0 015.364 0L12 4l2.318-1.682a4 4 0 015.364 5.364L12 20.682 4.318 7.682a4 4 0 010-5.364z"
              />
            </svg>
            <span className="text-lg font-medium">Chat On WhatsApp</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7v.01M8 7v.01M12 7v.01M21 10v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h14a2 2 0 012 2z"
              />
            </svg>
            <span className="text-lg font-medium">Email: care@redcliffelabs.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;