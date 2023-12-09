import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utlis/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resid } = useParams();
  const resturantinfo = useResturantMenu(resid);

  const { name, costForTwoMessage, cuisines, avgRating } =
    resturantinfo?.cards?.[0]?.card?.card?.info || {};

  const { itemCards } =
    resturantinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card || {};

  const resInfoArray =
    resturantinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = resInfoArray?.filter(
    (item) =>
      item.card &&
      item.card.card &&
      item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return resturantinfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-serif font-bold">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <p className="font-serif font-bold">{avgRating} star</p>
      {/** */}
      {categories.map((category, index) => (
        <ResturantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
