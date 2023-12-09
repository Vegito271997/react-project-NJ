import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header*/}
      <div className="w-6/12 bg-gray-50 shadow-lg  p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          {showItem ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {/*body */}
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default ResturantCategory;
