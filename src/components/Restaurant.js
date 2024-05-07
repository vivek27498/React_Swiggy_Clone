import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
  //props is a object
  // console.log(props.restaurant)
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props?.restaurant?.info;
  return (
    <div
      className="res-card"
      style={{ backgroundColor: " #ADD8E6" }}
      // onClick={
      //   (window.location.href = `/restaurant/${props?.restaurant?.info?.id}`)
      // }
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} avg rating</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default Restaurant;
