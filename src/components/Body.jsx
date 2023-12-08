import React from "react";
import { ReactDOM } from "react-dom/client";
import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import { resList } from "../utlis/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [txtSearch, setTextSearch] = useState("");

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.575532981536337&lng=77.38999029506851&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setResturantList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div>
        <input
          className="input-class"
          value={txtSearch}
          onChange={(e) => {
            setTextSearch(e.target.value);
          }}
        ></input>
        <button
          className="btn-search"
          onClick={() => {
            const filteredResturantList = resturantList.filter((res) =>
              res.info.name.toLowerCase().includes(txtSearch.toLowerCase())
            );
            setFilteredResList(filteredResturantList);
          }}
        >
          Search
        </button>
        <button
          className="class-btn"
          onClick={() => {
            const filteredList = filteredResList.filter(
              (list) => list.info.avgRating >= 4
            );
            setResturantList(filteredList);
          }}
        >
          Top Rated Resturants{" "}
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((data) => (
          <Link key={data.info.id} to={"/resturantmenu/" + data.info.id}>
            <ResturantCard resData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
