import { useState, useEffect } from "react";

const useSwiggyData = () => {
  const [swiggyData, setSwiggyData] = useState([]);
  useEffect(() => {
    fetchSwiggyData();
  }, []);
  const fetchSwiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.575532981536337&lng=77.38999029506851&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setSwiggyData(json.data);
  };
  return swiggyData;
};

export default useSwiggyData;
