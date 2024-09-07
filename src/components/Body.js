import React, { useState } from "react";
import RestCard from "./RestrauntCard";
import dataObj from "../utils/mockdata";

const Body = () => {
  const [restList, setResList] = useState(dataObj);

  const handleFilter = () => {
    let filteredList = dataObj.filter((res) => res.info.avgRating > 4);
    setResList(filteredList);
  };

  return (
    <div id="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restraunts
        </button>
      </div>
      <div className="cards__container">
        {restList.map((element) => (
          <RestCard key={element.info.id} resData={element} />
        ))}
      </div>
    </div>
  );
};
export default Body;
