import React from "react";
import {
    PiCurrencyInr,
    PiShieldChevron,
    PiHouse,
    PiCalendarCheck,
    PiStar,
} from "react-icons/pi";
import { useLoaderData } from "react-router-dom";

const SingleJersey = () => {
    const {
        title,
        description,
        team_name,
        venue,
        season_start,
        season_end,
        original_price,
        discounted_price,
        size,
        category,
        image_url,
    } = useLoaderData();

    const percentageOff = (
        ((original_price - discounted_price) / original_price) *
        100
    ).toFixed(1);
    const formattedSizes = size.split(" ").join(" | ");

    return (
        <div className="lg:flex md:flex items-center justify-center lg:m-12 md:m-6 m-4 lg:gap-6 space-y-6">
            <div className="lg:w-2/5 md:w-1/2 w-full flex flex-col items-center justify-center">
                <img
                    src={image_url}
                    alt={team_name}
                    className="lg:w-96 md:w-80 w-full h-auto rounded-md bg-gradient-to-br from-cream to-lightBlue lg:p-4 md:p-4 p-2"
                />

                <button className="mt-8 px-4 py-2 bg-navy text-offWhite rounded-md shadow-md hover:bg-orange text-lg transition duration-500">
                    Buy Now
                </button>
            </div>

            <div className="lg:w-3/5 md:w-1/2 w-full flex-col items-center justify-center space-y-6">
                <h2 className="text-navy lg:text-4xl md:text-3xl text-2xl font-russoOne mb-10">
                    {title}
                </h2>

                <p className="text-navy text-base md:text-lg font-semibold">
                    {description}
                </p>

                <p className="text-navy text-base flex flex-wrap justify-items-start items-center">
                    <span className="flex items-center mr-6 my-1">
                        <PiShieldChevron size={24} className="text-teal" />
                        <span className="ml-1">{team_name}</span>
                    </span>
                    <span className="flex items-center mr-6 my-1">
                        <PiHouse size={24} className="text-teal" />
                        <span className="ml-1">{venue}</span>
                    </span>
                    <span className="flex items-center mr-6 my-1">
                        <PiCalendarCheck size={24} className="text-teal" />
                        <span className="ml-1">
                            {season_start} - {season_end}
                        </span>
                    </span>
                </p>

                <p className="flex items-center text-teal gap-4 md:gap-10 flex-wrap">
                    <span className="flex items-center text-lg line-through decoration-1">
                        <PiCurrencyInr />
                        {original_price}
                    </span>
                    <span className="flex items-center text-lg md:text-xl font-semibold font-russoOne gap-1">
                        <PiCurrencyInr />
                        {discounted_price}
                    </span>
                    <span className="flex items-center text-base font-semibold border border-teal rounded-full py-2 px-4 bg-gradient-to-br from-cream to-lightBlue text-nowrap">
                        {percentageOff}% OFF!
                    </span>
                </p>

                <p className="flex items-center text-teal text-base gap-4 md:gap-10 flex-wrap">
                    <span className="flex items-center font-semibold">
                        {formattedSizes}
                    </span>
                    (Available In All Sizes)
                </p>

                <p className="flex items-center gap-1 flex-wrap">
                    <p className="text-teal text-base font-semibold mr-2">
                        Customer Rating:
                    </p>
                    <span className="flex">
                        {[...Array(5)].map((_, index) => (
                            <PiStar
                                key={index}
                                size={20}
                                className="text-orange"
                            />
                        ))}
                    </span>
                </p>

                <p className="text-teal text-base font-semibold mb-2 md:mb-4 gap-2">
                    {category}
                </p>

                <p className="text-teal text-sm italic flex flex-col">
                    <span>
                        * Orders will be shipped within 2-3 business days.
                    </span>
                    <span>
                        * Free shipping is available for all online payments.
                    </span>
                    <span>
                        * Cash On Delivery is subject to a fee of an extra ₹70.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SingleJersey;
