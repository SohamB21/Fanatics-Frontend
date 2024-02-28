import React from "react";
import userPfp1 from "../assets/userPfp1.png";
import userPfp2 from "../assets/userPfp2.png";
import userPfp3 from "../assets/userPfp3.png";
import userPfp4 from "../assets/userPfp4.png";

const Reviews = () => {
  return (
    <section className="flex flex-col items-center justify-center my-20">
      <div className="w-11/12 flex items-center justify-center lg:text-nowrap md:text-nowrap text-wrap font-semibold text-center">
        <div className="w-1/3 border-b border-double border-teal"></div>
        <div className="mx-4 antialiased text-3xl uppercase text-navy font-russoOne">
          Fanatics' Testimonials
        </div>
        <div className="w-1/3 border-b border-double border-teal"></div>
      </div>

      <div className="grid my-20 mx-5 border border-orange rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-offWhite">
        <figure className="flex flex-col items-center justify-center p-6 text-center border-b border-orange rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
          <blockquote className="max-w-2xl mx-auto mb-4 text-navy lg:mb-8">
            <h3 className="text-lg font-semibold text-navy">
              Amazing Quality and Service
            </h3>
            <p className="my-4 font-fredoka italic text-base">
              "If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-9 h-9 border-2 rounded-full border-teal"
              src={userPfp1}
              alt="User 1"
            />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-navy">
              <div>Bonnie Green</div>
              <div className="text-sm italic">Software Developer</div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-6 text-center border-b border-orange md:rounded-se-lg">
          <blockquote className="max-w-2xl mx-auto mb-4 text-navy lg:mb-8">
            <h3 className="text-lg font-semibold text-navy">Fast Shipping!</h3>
            <p className="my-4 font-fredoka italic text-base">
              "The shipping was super fast, and the jersey arrived in perfect
              condition."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-9 h-9 border-2 rounded-full border-teal"
              src={userPfp2}
              alt="User 2"
            />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-navy">
              <div>Roberta Casas</div>
              <div className="text-sm italic">Lead Designer</div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-6 text-center border-b border-orange md:rounded-es-lg md:border-b-0 md:border-e">
          <blockquote className="max-w-2xl mx-auto mb-4 text-navy lg:mb-8">
            <h3 className="text-lg font-semibold text-navy">
              Awesome Selection!
            </h3>
            <p className="my-4 font-fredoka italic text-base">
              "The best part? The jerseys are authentic and of top-notch
              quality."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-9 h-9 border-2 rounded-full border-teal"
              src={userPfp3}
              alt="User 3"
            />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-navy">
              <div>Jese Leos</div>
              <div className="text-sm italic">School Student</div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-6 text-center border-orange rounded-b-lg md:rounded-se-lg">
          <blockquote className="max-w-2xl mx-auto mb-4 text-navy lg:mb-8">
            <h3 className="text-lg font-semibold text-navy">
              Impressive Customer Support
            </h3>
            <p className="my-4 font-fredoka italic text-base">
              "Had a query regarding sizing, and the customer support team at
              Fanatics was incredibly helpful."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-9 h-9 border-2 rounded-full border-teal"
              src={userPfp4}
              alt="User 4"
            />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-navy">
              <div>Joseph McFall</div>
              <div className="text-sm italic">A Football Fanatic</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Reviews;
