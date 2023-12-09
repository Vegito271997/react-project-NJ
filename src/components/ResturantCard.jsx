import React from "react";
import { CDN_URL } from "../utlis/constants";

const ResturantCard = (prop) => {
  const { resData } = prop;
  const { name, cuisines, avgRating, sla, costForTwo } = resData.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className=" rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5 className="font-mono">{cuisines.join(", ")}</h5>
      <h5 className="font-thin">{avgRating} star</h5>
      <h5>{sla.slaString}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default ResturantCard;
