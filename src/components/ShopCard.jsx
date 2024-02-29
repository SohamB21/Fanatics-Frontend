import React from "react";
import { PiStar, PiShoppingCart, PiCurrencyInr } from "react-icons/pi";
import { Link } from "react-router-dom";

const ShopCard = ({
  _id,
  imageUrl,
  title,
  originalPrice,
  discountedPrice,
  teamName,
  venue,
  seasonStart,
  seasonEnd,
  category,
}) => {
  return (
    <div className="relative my-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-teal bg-offWhite shadow-md">
      <div className="relative justify-center mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img className="object-cover" src={imageUrl} alt="Product image" />
        <span className="absolute top-0 left-0 lg:ml-6 md:ml-6 rounded-full bg-navy px-2 text-center text-xs font-medium text-offWhite font-inter">
          SALE!
        </span>
      </div>
      <div className="my-5 px-5">
        <Link to={`/jersey/${_id}`} className="block">
          <h5 className="text-xl tracking-tight text-navy hover:text-orange font-fredoka">
            {title}
          </h5>
        </Link>
        <div className="mt-4 mb-5 flex items-center justify-between">
          <p className="flex justify-center items-center text-navy">
            <span className="text-3xl font-semibold flex justify-center items-center font-russoOne">
              <PiCurrencyInr />
              {originalPrice}
            </span>
            <span className="text-sm line-through flex justify-center items-center">
              <PiCurrencyInr />
              {discountedPrice}
            </span>
          </p>
          <div className="flex items-center justify-center">
            <PiStar className={`h-4 w-4 text-orange`} />
            <PiStar className={`h-4 w-4 text-orange`} />
            <PiStar className={`h-4 w-4 text-orange`} />
            <PiStar className={`h-4 w-4 text-orange`} />
            <PiStar className={`h-4 w-4 text-orange`} />
            <span className="mx-1 rounded bg-cream px-2 py-1 text-orange text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <button className="flex items-center justify-center bg-navy px-5 py-2 text-center text-sm font-medium text-offWhite hover:bg-teal rounded-md w-full">
          <PiShoppingCart className="mr-2 h-6 w-6" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;