import React from "react";
import "./Home.css";
import config from "./../../config.json";
import Card from "../../component/Cake-card/Card";

function Home() {
  return (
    <div style={{backgroundColor : config.themeColors.bodybg}} className="container p-4 ">
      <h1
        className="text-center"
        style={{ color: config.themeColors.headingColor }}
      >
        {config.product}
      </h1>
      {/* <p className="text-center"> {config.} </p> */}
      <h3 className="text-center"> services </h3>
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
  );
}

export default Home;
