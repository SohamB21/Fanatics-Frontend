import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    PiArrowCircleLeft,
    PiArrowCircleRight,
    PiCurrencyInr,
} from "react-icons/pi";
import theme from "../theme";

function RetroJerseys() {
    const [jerseys, setJerseys] = useState([]);

    // fetching data from the database
    useEffect(() => {
        fetch("http://localhost:5000/all-jerseys?category=Retro Jerseys")
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
                <PiArrowCircleLeft size={32} color="#0D7164" />
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
                <PiArrowCircleRight size={32} color="#0D7164" />
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <div className="w-11/12 my-20">
                <div className="flex items-center justify-center text-nowrap font-semibold">
                    <div className="w-1/3 border-b border-double border-[#0D7164]"></div>
                    <div
                        className="mx-4 antialiased text-3xl my-4 uppercase text-[#001233]"
                        style={{ fontFamily: theme.fonts.russoOne }}
                    >
                        Retro Jerseys
                    </div>
                    <div className="w-1/3 border-b border-double border-[#0D7164]"></div>
                </div>

                <div className="flex items-center justify-center text-nowrap">
                    <div className="w-1/5 border-b border-[#0D7164]"></div>
                    <div
                        className="mx-4 antialiased text-md uppercase text-[#0D7164]"
                        style={{ fontFamily: theme.fonts.fredoka }}
                    >
                        Classic Designs, Timeless Elegance! Shop Now!
                    </div>
                    <div className="w-1/5 border-b border-[#0D7164]"></div>
                </div>

                <div className="slider-container my-10">
                    <Slider
                        {...settings}
                        className="w-full bg-[#F9F3EA] rounded-md"
                    >
                        {jerseys.map((jersey, index) => (
                            <div
                                key={index}
                                className="flex justify-between h-full p-6 grow"
                            >
                                <div className="flex justify-center items-center w-full">
                                    <img
                                        src={jersey.image_url}
                                        alt={`Jersey ${index + 1}`}
                                        className="h-72 object-contain rounded-md shadow-lg shadow-[#0D7164]"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center w-full p-6 text-center gap-4">
                                    <p
                                        className="antialiased text-[#001233] text-base font-semibold"
                                        style={{
                                            fontFamily: theme.fonts.inter,
                                        }}
                                    >
                                        {jersey.description}
                                    </p>
                                    <p
                                        className="antialiased flex items-center text-[#FE5000] text-lg font-semibold gap-5"
                                        style={{
                                            fontFamily: theme.fonts.inter,
                                        }}
                                    >
                                        <span className="flex items-center line-through decoration-2">
                                            <PiCurrencyInr />
                                            {jersey.original_price}
                                        </span>
                                        <span className="flex items-center">
                                            <PiCurrencyInr />
                                            {jersey.discounted_price}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default RetroJerseys;
