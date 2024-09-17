import React, { useEffect, useState } from "react";
import RestCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [restList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants;
    setResList(listOfRestraunts);
    setOriginalList(listOfRestraunts);
  };

  const handleSearch = () => {
    if (!searchText.trim()) {
      setResList(originalList);
    } else {
      const filteredRestraunts = originalList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setResList(filteredRestraunts);
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restList.length !== 0 ? (
    <div id="body">
      <div className="filter">
        <div className="search-sort-wrap">
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurants
          </button>
          <div className="search-wrap">
            <input
              className="search-box"
              placeholder="search"
              type="text"
              value={searchText}
              onChange={handleSearchChange}
            ></input>
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="cards__container">
        {restList.map((element) => (
          <RestCard key={element.info.id} resData={element} />
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
