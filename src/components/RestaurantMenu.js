import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(MENU_URL + resId);
    const menuJson = await menu.json();
    // console.log(menuJson?.data);
    setResInfo(menuJson.data);
  };

  if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

//   console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((rest) => (
          <li key={rest?.card?.info?.id}>
            {rest?.card?.info?.name} -{" ₹ "}
            {(rest?.card?.info?.defaultPrice || rest?.card?.info?.price) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
