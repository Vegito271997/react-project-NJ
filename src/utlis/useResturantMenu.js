import { useState, useEffect } from "react";

const useResturantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchResData();
  }, []);
  const fetchResData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5745096&lng=77.3905778&restaurantId=" +
        resid
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResturantMenu;
