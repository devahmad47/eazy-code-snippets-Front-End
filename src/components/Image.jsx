// src/ImageGenerator.js
import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_URL;
const key = process.env.REACT_APP_API_KEY;
const ImageGenerator = () => {
  const [textPrompt, setTextPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
// const uri="https://api.openai.com/v1/images/generations"
  const generateImage = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: 'dall-e-3',
          prompt: textPrompt,
          n: 1,
          size: '1024x1024',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`,
          },
        }
      );
console.log("AI", response)
      if (response.status === 200) {
        const data = response.data;
        console.log("AI", response.data)
        setImageUrl(data.data[0].url);
      } else {
        console.error('Failed to generate image:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  };
//   useEffect(() => {
//     if (imageUrl.length > 1) {
//       window.location.reload();
//     }
//   }, [imageUrl]);
  return (
   
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
       <div class="relative bg-gray-900 text-gray-900 mt-16 lg:mt-24">
    <svg
      className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
      preserveAspectRatio="none"
      viewBox="0 0 1440 54"
    >
      <path
        fill="currentColor"
        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
      />
    </svg>
  </div>
      <h1 className="text-3xl font-bold mb-4">Text to Image Generator</h1>
      <textarea
        className="w-full max-w-lg p-2 border border-gray-300 rounded mb-4"
        rows="4"
        placeholder="Enter your text prompt here..."
        value={textPrompt}
        onChange={(e) => setTextPrompt(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={generateImage}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Generated" className="max-w-full rounded border border-gray-300" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
