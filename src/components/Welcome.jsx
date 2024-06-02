import React, { useState } from 'react';
import '../index.css'; // Assuming you have the necessary CSS styles here
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
      {modalVisible && (
        <div
          onClick={closeModal}
          className="h-screen w-full absolute flex items-center justify-center bg-modal"
        >
          <div
            className="bg-white rounded shadow p-8 m-4 max-w-md max-h-full text-center"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <div className="mb-4">
              <h1>Welcome!</h1>
            </div>
            <div className="mb-8">
              <p>Ready to get started? Keep scrolling to see some great components.</p>
            </div>
            <div className="flex justify-center">
              <Link to='/home'
                className="flex-no-shrink text-white py-2 px-4 rounded bg-teal hover:bg-teal-dark"
                onClick={closeModal}
              >
                Let's Go
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Welcome;
