import { shimmer_card_unit } from "../utils/constants.js";
const CardShimmer = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg shadow-md w-48 ">
      <div className="h-32 bg-gray-300 animate-pulse rounded"></div>
      <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 animate-pulse rounded w-full"></div>
    </div>
  );
};

// not used any where
const shimmer_menu_card_unit = 4;
export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details">
          <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate"></div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            {Array(shimmer_menu_card_unit)
              .fill("")
              .map((element, index) => (
                <div className="shimmer-menu-card" key={index}>
                  <div className="shimmer-item-details">
                    <h3 className="shimmer-w40  stroke animate"></h3>
                    <p className="shimmer-w20  stroke animate"> </p>
                    <p className="shimmer-w60  stroke animate"></p>
                  </div>
                  <div className="shimmer-img-wrapper">
                    <img className="shimmer-img stroke animate" />
                    <div className="shimmer-btn stroke animate"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center  mt-5">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
