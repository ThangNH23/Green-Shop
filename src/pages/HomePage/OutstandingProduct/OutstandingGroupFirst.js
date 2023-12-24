import React from "react";
import OutStanding from "./Outstanding_Product";

const OutstandingGroupFirst = ({dataGroup}) => {
  console.log(dataGroup);
  return (
    <div className="col-6 ">
      <div className="row">
      {dataGroup && dataGroup.map((item, index) => (
        <div className={index === 0 ? "col-12" : "col-6"}>
          <OutStanding
            sale={item.sale}
            status={item.status}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        </div>
      ))}
      </div>
    </div>
  );
};

export default OutstandingGroupFirst;
