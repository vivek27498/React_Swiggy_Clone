import Restaurant from "./Restaurant";
import api from "../utils/api";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // let listOfRestaurant = api; //normal js variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]); //react state variable
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //react state variable

  const [searchText, setSearchText] = useState("");
  //above is same as below and works the same way, it's the long method to do code
  const arr = useState(listOfRestaurant);
  const val = arr[0];
  const setVal = arr[1];

  useEffect(() => {
    // console.log("fetching data")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json.data);
    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log("rendering")
  // if(listOfRestaurant.length === 0){
  //   return (<Shimmer />);
  // }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value); //every key that you enter will trigger re render of component
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurant.filter((restaurant) =>
                  restaurant?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurant(
              listOfRestaurant.filter((res) => res.info.avgRating > 4.4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              className="card-styling-link"
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              <Restaurant key={restaurant?.info?.id} restaurant={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
