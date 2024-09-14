import { CDN_URL } from "../utils/constants";

const RestCard = ({ resData }) => {
  const { name, avgRating, cloudinaryImageId, costForTwo, sla } = resData?.info;
  return (
    <div className="order-card">
      <img src={`${CDN_URL + cloudinaryImageId}`} alt={name} />
      <h3>{name}</h3>
      <h6>{avgRating} Stars</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} Mins</h6>
    </div>
  );
};

export default RestCard;
