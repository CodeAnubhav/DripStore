import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  return (
    <div class="flex flex-wrap place-items-top">
      <section class="relative mx-auto ">
        <nav class="flex justify-between bg-black text-white w-screen">
          <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <a class="text-3xl font-bold font-heading logo-txt" href="/#">
              DRIP STORE
            </a>

            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li
                onClick={() => {
                  setMenu("shop");
                }}
              >
                <a class="hover:text-gray-200" href="#">
                  <Link to="/">Shop</Link>
                </a>
                {menu === "shop" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("men");
                }}
              >
                <a class="hover:text-gray-200" href="#">
                  <Link to="/men">Men</Link>
                </a>
                {menu === "men" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("women");
                }}
              >
                <a class="hover:text-gray-200" href="#">
                  <Link to="/women">Women</Link>
                </a>
                {menu === "women" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("accessories");
                }}
              >
                <a class="hover:text-gray-200" href="#">
                  <Link to="/kids">Kids</Link>
                </a>
                {menu === "accessories" ? <hr /> : <></>}
              </li>
            </ul>

            <div class="hidden xl:flex items-center space-x-5 items-center">
              <a class="flex items-center hover:text-gray-200" href="#">
                <Link to="/login">Log in</Link>
              </a>
              <a class="flex items-center hover:text-gray-200" href="#">
                <Link to="/cart">
                  <span className="absolute -mt-2.625 ml-1 text-white font-semibold bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                    {`(${getTotalCartItem()})`}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mt-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </Link>
              </a>
            </div>
          </div>

          <a class="xl:hidden flex mr-6 items-center" href="#">
            <Link to="/cart">
              <span className="absolute -mt-2.5 ml-1 text-white font-semibold bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                {`(${getTotalCartItem()})`}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mt-2 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </a>


          <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>

          
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
