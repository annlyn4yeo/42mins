import React, { useEffect, useState } from "react";
import RestCard from "./RestrauntCard";

const Body = () => {
  const [restList, setResList] = useState([]);

  const handleFilter = () => {
    let filteredList = restList.filter((res) => res.info.avgRating > 4);
    setResList(filteredList);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const listOfRestraunts =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setResList(listOfRestraunts);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
