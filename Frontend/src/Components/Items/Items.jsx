import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="card">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-black dark:border-gray-700 transition-transform transform hover:shadow-lg">
        <a href="#">
         <Link to={`/product/${props.id}`}>
         <img
            className="rounded-lg p-8"
            src={props.image}
            alt="product image"
          />
          </Link>
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {props.name}
            </h3>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${props.new_price}
            </span>
            {/* <a href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
            to cart</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
