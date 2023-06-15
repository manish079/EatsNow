import { RestaurantCard } from "./RestaurantCard";
import { restaurantList, API } from "../constant";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";

// Function to filter the restaurants based on the user input type
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );

  console.log(filterData);
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  //Loads -> Render -> API -> UpdateUI
  useEffect(() => {
    getRestaurants(); // API calling
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    try {
      const response = await fetch(API);
      const jsonData = await response?.json();

      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(
        jsonData?.data?.success?.cards[5]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );

      setFilterRestaurants(
        jsonData?.data?.success?.cards[5]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  }

  // use searchData function and set condition if data is empty show error message
  function searchRestaurants(searchText, restaurants) {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No restaurant found!!");
      }
      return data;
    } else {
      setErrorMessage("");
      return restaurants;
    }
  }

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) {
    return null;
  }

  //Conditional Rendering
  // if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <section className="restaurant-section ">
      <div className="search-box container">
        {/* Input field for searching */}
        <input
          className="search-rest"
          type="text"
          value={searchText}
          placeholder="Search a restaurant you want..."
          onChange={(e) => {
            setSearchText(e.target.value);
            // when user will enter the data, it automatically called searchData function
            searchRestaurants(e.target.value, allRestaurants);
            const data = searchRestaurants(e.target.value, allRestaurants);
            setFilterRestaurants(data);
          }}
        />

        {/* Button to trigger the search */}
        <button
          className="search-btn"
          onClick={() => {
            // Filter the data based on the search text
            const data = searchRestaurants(searchText, allRestaurants);
            // Update the state of restaurants list with filtered data
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list flex container">
          {/* always pass key as a props */}
          {/* keys helps in rendered only specific elements that newly added (reconciliation(diff algo))*/}
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filterRestaurants.map((restaurant, index) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })}
        </div>
      )}
    </section>
  );
};
