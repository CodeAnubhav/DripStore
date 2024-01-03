import React from "react";
import data_product from "../Assets/data";
import Items from "../Items/Items";
import './Popular.css'

const Popular = () => {
  return (
    <>
      <div className="popular-section">
        <h1 className="text-5xl font-bold m-4 text-center">POPULAR IN WOMEN</h1>
        <hr className="border-t-2 border-gray-300 mb-8" />
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          {data_product.map((item, i) => (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
