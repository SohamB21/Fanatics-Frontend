import React from "react";

const SingleJersey = ({ jersey }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={jersey.image_url}
        alt={jersey.title}
        className="w-full h-auto mb-4 rounded-lg"
      />
      <h2 className="text-xl font-semibold mb-2">{jersey.title}</h2>
      <p className="text-gray-600 mb-4">{jersey.description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700">Team: {jersey.team_name}</span>
        <span className="text-gray-700">Venue: {jersey.venue}</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700">Season: {jersey.season_start}/{jersey.season_end}</span>
        <span className="text-gray-700">Category: {jersey.category}</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700">Original Price: ${jersey.original_price}</span>
        <span className="text-gray-700">Discounted Price: ${jersey.discounted_price}</span>
      </div>
      <p className="text-gray-700 mb-4">Available Sizes: {jersey.size}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default SingleJersey;
