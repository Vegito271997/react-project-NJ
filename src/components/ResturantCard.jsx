import React from "react";
import { ReactDOM } from "react-dom/client";
import { CDN_URL } from "../utlis/constants";

const ResturantCard = (prop) => {
    const { resData } = prop;
    const {name, cuisines, avgRating, sla, costForTwo} = resData.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-img"
          alt="res-logo"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} star</h5>
        <h5>{sla.slaString} mins</h5>
        <h5>{costForTwo}</h5>
      </div>
    );
  };

  export default ResturantCard;