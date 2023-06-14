import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useState } from "react";

// Function to filter the restaurants based on the searchText
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );

  console.log(filterData);
  return filterData;
}

export const Body = () => {
  //Hook:- provide way to manage state
  //State:- it can hold different types of data.
  /**
   *  state is a built-in feature that allows us to manage and store data within a component. It represents the current state of the component, such as user input, data fetched from an API, or any other dynamic information that can change over time.
   */
  //Every component has its own state
  // useState hook returns an array with two elements: the current state value and a function to update the state.

  // const [inputText, setInputText] = useState("Adipurush");  //Default value in input text is "Adipurush"

  // const inputText = ""  //JS Way of writing variable

  const [searchText, setSearchText] = useState();

  const [restaurants, setRestaurants] = useState(restaurantList);
  //inputText is a state  variable
  console.log(searchText);

  /**
   * Why we need state variable
   * React has One Way Data-Binding. for 2ways we can use additional things
   * If I use normal local variable inside component and ex. a=10 and let's assume I update this a in some other component then react don't now a is updated. To track of a We use in react something "state". that keep track of variables inside component
   */

  /**
   * Every-time state-variable changes react keep track of and rerender component every-time. It's use Reconciliation(Diff Algo) behind the scene ans update those whose element value changed so react is faster
   */

  return (
    <section className="restaurant-section ">
      <div className="search-box container">
        {/* Input field for searching */}
        <input
          className="search-rest"
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* Button to trigger the search */}
        <button
          className="search-btn"
          onClick={() => {
            // Filter the data based on the search text
            const data = filterData(searchText, restaurants);
            // Update the state of restaurants list with filtered data
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list flex container">
        {/* Render the RestaurantCard component for each restaurant */}

        {/* <RestaurantCard {...restaurantList[0].info} />
        <RestaurantCard {...restaurantList[1].info} />
        <RestaurantCard {...restaurantList[2].info} />
        <RestaurantCard {...restaurantList[3].info} />
        <RestaurantCard {...restaurantList[4].info} />
        <RestaurantCard {...restaurantList[5].info} />
        <RestaurantCard {...restaurantList[6].info} />
        <RestaurantCard {...restaurantList[7].info} /> */}

        {/* pass key as a props */}
        {/* keys helps in rendered only specific divs that newly added */}

        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </section>
  );
};
