import React from "react";
import "../Deals.css";

const dealsData = [
  {
    name: "Mouse",
    oldPrice: "$80.00",
    newPrice: "$67.00",
    discount: "-13%",
    reviews: 0,
  },
  {
    name: "Mouse 2",
    oldPrice: "$60.00",
    newPrice: "$50.00",
    discount: "-10%",
    reviews: 2,
  },
  {
    name: "Mouse 3",
    oldPrice: "$85.00",
    newPrice: "$60.00",
    discount: "-26%",
    reviews: 4,
  },
  {
    name: "Mouse 4",
    oldPrice: "$40.00",
    newPrice: "$23.00",
    discount: "-17%",
    reviews: 0,
  },
  {
    name: "Mouse 5",
    oldPrice: "$50.00",
    newPrice: "$37.00",
    discount: "-13%",
    reviews: 0,
  },
  {
    name: "Mouse 6",
    oldPrice: "$90.00",
    newPrice: "$66.00",
    discount: "-24%",
    reviews: 2,
  },
  {
    name: "Mouse 7",
    oldPrice: "$70.00",
    newPrice: "$62.00",
    discount: "-8%",
    reviews: 0,
  },
  {
    name: "Mouse 8",
    oldPrice: "$20.00",
    newPrice: "$17.00",
    discount: "-3%",
    reviews: 0,
  },
];

const Deals = () => {
  return (
    <div className="deals-container">
      <h2></h2>
      <div className="deals-grid">
        {dealsData.map((deal, index) => (
          <div key={index} className="deal-card">
            <div className="deal-image">
              <div className="discount-badge">{deal.discount}</div>
              <img src="/img/sp6.jpg" alt={deal.name} />
            </div>
            <div className="deal-info">
              <h3>{deal.name}</h3>
              <div className="deal-reviews">
                {deal.reviews} Review{deal.reviews !== 1 ? "s" : ""}
              </div>
              <div className="deal-prices">
                <span className="old-price">{deal.oldPrice}</span>
                <span className="new-price">{deal.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
