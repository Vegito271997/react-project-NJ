import React from "react";
import { useState, useEffect, useContext } from "react";
import ResturantCard from "./ResturantCard";
import { resList } from "../utlis/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import withPromotedLabel from "../utlis/withPromotedLabel";
import UserContext from "../utlis/UserContext";

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

  const { loggedInInfo, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!! Please check you internet connection</h1>
    );

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="m-4 p-4">
        <input
          className="border border-solid rounded-md h-8 w-56 border-black"
          value={txtSearch}
          onChange={(e) => {
            setTextSearch(e.target.value);
          }}
        ></input>
        <button
          className="border border-solid rounded-md border-black bg-black text-sky-100 m-4 p-1"
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
          className="border border-solid rounded-md border-black bg-black text-sky-100 m-4 p-1"
          onClick={() => {
            const filteredList = filteredResList.filter(
              (list) => list.info.avgRating >= 4
            );
            setResturantList(filteredList);
          }}
        >
          Top Rated Resturants{" "}
        </button>
        <input
          className="border border-solid rounded-md h-8 w-56 border-black"
          value={loggedInInfo}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((data) => (
          <Link key={data.info.id} to={"/resturantmenu/" + data.info.id}>
            {/** if promoted is true return higher order component */}
            {data.info.veg ? (
              <ResturantCardPromoted resData={data} />
            ) : (
              <ResturantCard resData={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
