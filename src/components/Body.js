import React from "react";
import RestCard from "./RestrauntCard";
import dataObj from "../utils/mockdata";

const Body = () => {
  return (
    <div id="body">
      <div className="search">Search</div>
      <div className="cards__container">
        {dataObj.map((element) => (
          <RestCard key={element.info.id} resData={element} />
        ))}
      </div>
    </div>
  );
};
export default Body;
