import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const { resid } = useParams();
  const [resturantinfo, setResturantInfo] = useState([]);
  useEffect(() => {
    resInfo();
  }, []);
  const resInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5745096&lng=77.3905778&restaurantId=" +
        resid
    );
    const json = await data.json();
    setResturantInfo(json.data);
  };

  const { name, costForTwoMessage, cuisines, avgRating } =
    resturantinfo?.cards?.[0]?.card?.card?.info || {};

  const { itemCards } =
    resturantinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card || {};
  console.log(itemCards);

  return resturantinfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h4>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h4>
      <h4>{avgRating} star</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
