import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <img src={props.banner} alt="" srcset="" />
      <div className="latest-section">
        <h1 className="text-5xl font-bold m-4 text-center">Collection</h1>
        <hr className="border-t-2 border-gray-300 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          {all_product.map((item, i) => {
            if (item.category === props.category) {
              return (
                <Items
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
