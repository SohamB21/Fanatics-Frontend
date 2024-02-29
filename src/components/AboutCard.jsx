import React from "react";

const AboutCard = ({ layout, fansImg }) => {
  const order = layout === "reverse" ? 1 : 0;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 
        ${order === 1 ? "mb-20" : "mt-20"}`}
    >
      <div
        className={`flex items-center justify-center bg-cream
          ${order === 1 ? "order-last" : ""}`}
      >
        <img
          src={fansImg}
          alt="Fans Image"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="bg-navy p-4 rounded-sm">
        <p className="text-offWhite">
          Welcome to Fanatics, your ultimate destination for authentic jerseys
          and fan gear! At Fanatics, we understand the passion and pride fans
          have for their favorite teams. That's why we're committed to providing
          top-quality merchandise that lets you show off your team spirit in
          style.
          <br />
          <br />
          Whether you're a die-hard supporter or a casual enthusiast, we've got
          you covered with a wide selection of jerseys, apparel, and accessories
          from all the major sports leagues. From NFL and NBA to MLB and NHL, we
          carry officially licensed merchandise featuring your favorite teams
          and players.
          <br />
          <br />
          Our mission is simple: to make every fan feel like a champion. With
          fast shipping, secure checkout, and unparalleled customer service,
          shopping at Fanatics is a winning experience every time. Join the
          thousands of fans who trust Fanatics for all their fan gear needs and
          gear up for victory!
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
