import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
    PiCurrencyInr,
    PiShieldChevron,
    PiHouse,
    PiCalendarCheck,
} from "react-icons/pi";

const SingleJersey = () => {
    const {
        _id,
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
        <div className="lg:flex md:flex items-start justify-center lg:m-12 m-6 lg:gap-6 space-y-6">
            <div className="lg:w-2/5 md:w-1/2 flex items-center justify-center">
                <img
                    src={image_url}
                    alt={team_name}
                    className="w-96 h-96 rounded-md bg-gradient-to-br from-cream to-lightBlue p-4"
                />
            </div>
            <div className="lg:w-3/5 md:w-1/2 flex-col items-center justify-center space-y-6">
                <h2 className="antialiased text-navy text-5xl font-russoOne mb-12">
                    {title}
                </h2>

                <p className="antialiased text-teal text-xl font-semibold">
                    {description}
                </p>

                <p className="flex items-center text-teal text-base gap-10">
                    <span className="antialiased flex items-center font-semibold gap-2">
                        <PiShieldChevron size={28} />
                        {team_name}
                    </span>
                    <span className="antialiased flex items-center font-semibold gap-2">
                        <PiHouse size={28} />
                        {venue}
                    </span>
                    <span className="antialiased flex items-center font-semibold gap-2">
                        <PiCalendarCheck size={28} />
                        {season_start} - {season_end}
                    </span>
                </p>

                <p className="antialiased flex items-center text-teal text-base gap-10">
                    <span className="antialiased flex items-center font-semibold">
                        {formattedSizes}
                    </span>
                    (Available In All Sizes)
                </p>

                <p className="flex items-center text-teal gap-10">
                    <span className="antialiased flex items-center text-xl font-semibold font-russoOne gap-1">
                        <PiCurrencyInr />
                        {discounted_price}
                    </span>
                    <span className="antialiased flex items-center text-base line-through decoration-1">
                        <PiCurrencyInr />
                        {original_price}
                    </span>
                    <span className="antialiased flex items-center text-base font-semibold border border-teal rounded-full py-2 px-4 bg-gradient-to-br from-cream to-lightBlue">
                        {percentageOff}% OFF!
                    </span>
                </p>

                <p className="antialiased text-teal text-base font-semibold mb-4 gap-2">
                    {category}
                </p>
            </div>
        </div>
    );
};

export default SingleJersey;
