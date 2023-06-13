import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../constant";

export const Body = () => {
  return (
    <section className="restaurant-section ">
      <div className="restaurant-list flex container">
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
        {restaurantList.map((restaurant, index) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </section>
  );
};
