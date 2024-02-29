import React, { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard.jsx";

const ShopView = () => {
  const [jerseys, setJerseys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-jerseys")
      .then((res) => res.json())
      .then((data) => setJerseys(data))
      .catch((error) => console.error("Error fetching jerseys:", error));
  }, []);
  console.log("ShopView:", jerseys);

  const jerseyCards =
    jerseys && jerseys.length > 0 ? (
      jerseys.map((jersey, index) => (
        <ShopCard
          key={index}
          _id={jersey._id}
          imageUrl={jersey.image_url}
          title={jersey.title}
          originalPrice={jersey.original_price}
          discountedPrice={jersey.discounted_price}
          teamName={jersey.team_name}
          venue={jersey.venue}
          seasonStart={jersey.season_start}
          seasonEnd={jersey.season_end}
          category={jersey.category}
        />
      ))
    ) : (
      <p className="w-full flex items-center justify-center text-teal font-inter">
        No jerseys available
      </p>
    );

  return (
    <div className="md:px-4 lg:px-6">
      <div className="w-full mx-auto">
        <div className="flex flex-wrap justify-center gap-4">{jerseyCards}</div>
      </div>
    </div>
  );
};

export default ShopView;
