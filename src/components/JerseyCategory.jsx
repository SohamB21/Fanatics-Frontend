import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    PiArrowCircleLeft,
    PiArrowCircleRight,
    PiCurrencyInr,
    PiStar,
} from "react-icons/pi";
import { Link } from "react-router-dom";

function JerseyCategory({ categoryName, subHeading, categoryId }) {
    const [jerseys, setJerseys] = useState([]);

    // fetching data from the database
    useEffect(() => {
        fetch(`http://localhost:5000/all-jerseys?category=${categoryName}`)
            .then((res) => res.json())
            .then((data) => setJerseys(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    // Custom previous arrow component
    function CustomPrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <PiArrowCircleLeft size={32} className="text-teal" />
            </div>
        );
    }

    // Custom next arrow component
    function CustomNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <PiArrowCircleRight size={32} className="text-teal" />
            </div>
        );
    }

    return (
        <div id={categoryName} className="flex justify-center">
            <div className="w-11/12 my-20">
                <div className="flex items-center justify-center text-nowrap font-semibold">
                    <div className="w-1/3 border-b border-double border-teal"></div>
                    <div className="mx-4 text-3xl my-4 uppercase text-navy font-russoOne">
                        {categoryName}
                    </div>
                    <div className="w-1/3 border-b border-double border-teal"></div>
                </div>

                <div className="flex items-center justify-center text-nowrap">
                    <div className="w-1/5 border-b border-teal"></div>
                    <div className="lg:mx-4 md:mx-2 mx-1 text-md uppercase text-teal font-fredoka text-wrap text-center">
                        {subHeading}
                    </div>
                    <div className="w-1/5 border-b border-teal"></div>
                </div>

                <div className="slider-container my-10">
                    <Slider
                        {...settings}
                        className="w-full bg-gradient-to-br from-teal via-offWhite to-lightBlue rounded-md shadow-md shadow-teal"
                    >
                        {jerseys.map((jersey, index) => (
                            <div
                                key={index}
                                className="flex justify-between h-full p-6 grow"
                            >
                                <Link
                                    to={`/jersey/${jersey._id}`}
                                    className="block"
                                >
                                    <div className="flex justify-center items-center w-full">
                                        <img
                                            src={jersey.image_url}
                                            alt={jersey.team_name}
                                            className="h-72 object-contain rounded-md shadow-lg shadow-teal"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full lg:p-6 md:p-4 p-2 text-center gap-4">
                                        <p className="text-navy text-lg font-russoOne">
                                            {categoryId === "3"
                                                ? jersey.title
                                                : jersey.description}
                                        </p>
                                        <p className="flex space-x-1 rtl:space-x-reverse text-orange items-center">
                                            <PiStar />
                                            <PiStar />
                                            <PiStar />
                                            <PiStar />
                                            <PiStar />
                                            <span className="bg-cream text-xs font-semibold px-2 py-1 rounded ms-3">
                                                5.0
                                            </span>
                                        </p>
                                        <p className="flex items-center gap-4 text-base uppercase flex-wrap items-center justify-center text-teal">
                                            <span className="flex items-center font-semibold font-russoOne text-lg">
                                                <PiCurrencyInr />
                                                {jersey.discounted_price}
                                            </span>
                                            <span className="flex items-center font-medium gap-px">
                                                {jersey.original_price &&
                                                jersey.discounted_price ? (
                                                    <>
                                                        Save <PiCurrencyInr />
                                                        {jersey.original_price -
                                                            jersey.discounted_price}
                                                        !
                                                    </>
                                                ) : (
                                                    "Save Big!"
                                                )}
                                            </span>
                                            <button className="flex items-center bg-teal text-offWhite px-3 py-1 rounded-md">
                                                See Details
                                            </button>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default JerseyCategory;
