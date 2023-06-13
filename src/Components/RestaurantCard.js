import { IMG_CDN } from "../constant";

export const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};
