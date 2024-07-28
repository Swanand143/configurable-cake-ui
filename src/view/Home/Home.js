import React from "react";
import "./Home.css";
import config from "./../../config.json";
import Card from "../../component/Cake-card/Card";
import Footer from "../../component/Cake-card/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";

function Home() {
  return (
    <>
    <Navbar/>
    <div
      style={{ backgroundColor: config.themeColors.bodybg }}
      className="container"
    >
      <h1
        className="heading"
        style={{ color: config.themeColors.headingColor }}
      >
        {config.product}
      </h1>
      <div className="card-container">
        {config.cakes.map((serviceData, index) => {
          const {
            id,
            title,
            previewDescription,
            detailDescription,
            image,
            price,
          } = serviceData;
          return (
            <Card
              key={index}
              id={id}
              title={title}
              previewDescription={previewDescription}
              detailDescription={detailDescription}
              image={image}
              price={price}
            />
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
