import React, { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard.jsx";

const ShopView = () => {
  const [jerseys, setJerseys] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_FANATICS_BACKEND_URL}/all-jerseys`)
      .then((res) => res.json())
      .then((data) => setJerseys(data))
      .catch((error) => console.error("Error fetching jerseys:", error));
  }, []);
  // console.log("ShopView:", jerseys);

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
          category={jersey.category}
          sellerName={jersey.seller_name}
        />
      ))
    ) : (
      <p className="w-screen text-center text-teal">
        No Jerseys Available
      </p>
    );

  return (
    <div className="md:px-4 lg:px-6">
      <div className="w-full mx-auto">
        <div className="flex flex-wrap justify-center gap-8">{jerseyCards}</div>
      </div>
    </div>
  );
};

export default ShopView;
