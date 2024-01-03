import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Productdisplay = (props) => {
    const {addToCart} = useContext(ShopContext);
    const {removeCart} = useContext(ShopContext);

  const { product } = props;
  return (
    <section class="py-12 sm:py-16">
      <div class="container mx-auto px-4">
        <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div class="lg:col-span-3 lg:row-end-1">
            <div class="lg:flex lg:items-start">
              <div class="lg:order-2 lg:ml-5">
                <div class="max-w-xl overflow-hidden rounded-lg">
                  <img
                    class="h-full w-full max-w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </div>
              </div>

              <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div class="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                  >
                    <img
                      class="h-full w-full object-cover"
                      src={product.image}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      class="h-full w-full object-cover"
                      src={product.image}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      class="h-full w-full object-cover"
                      src={product.image}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            <h2 class="mt-8 text-base text-gray-900">Choose Size</h2>
            <div class="mt-3 flex select-none flex-wrap items-center gap-1">
              <label class="cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="Powder"
                  class="peer sr-only"
                  checked
                />
                <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  M
                </p>
              </label>
              <label class="cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="Whole Bean"
                  class="peer sr-only"
                />
                <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                L                </p>
              </label>
              <label class="cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="Groud"
                  class="peer sr-only"
                />
                <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  XL
                </p>
              </label>
            </div>
            <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div class="flex items-end">
                <h1 class="text-3xl font-bold">${product.new_price}</h1>
              </div>

              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                onClick={()=>addToCart(product.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to cart
              </button>
            </div>

            <ul class="mt-8 space-y-2">
              <li class="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  class="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    class=""
                  ></path>
                </svg>
                Free shipping worldwide
              </li>

              <li class="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  class="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    class=""
                  ></path>
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>

          <div class="lg:col-span-3">
            <div class="border-b border-gray-300">
              <nav class="flex gap-4">
                <a
                  href="#"
                  title=""
                  class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                >
                  {" "}
                  Description{" "}
                </a>
              </nav>
            </div>

            <div class="mt-8 flow-root sm:mt-12">
              <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
              <p class="mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
                temporibus adipisci aperiam recusandae, laborum facilis
                laudantium asperiores distinctio impedit fugit voluptatum iste
                animi nobis? Similique obcaecati cumque laborum error
                reprehenderit, aperiam accusamus maiores harum dolorem
                voluptatibus porro dignissimos nemo aliquam nulla debitis
                quaerat. Accusamus excepturi officia libero officiis placeat
                possimus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productdisplay;
