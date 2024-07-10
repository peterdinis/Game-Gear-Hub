import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC } from "react";

const OrderCart: FC = () => {
    return (
        <div className=" col-span-12 xl:col-span-4 bg-gray-50 dark:bg-prim w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
        <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
          Order Summary
        </h2>
        <div className="mt-8">
          <div className="flex items-center justify-between pb-6">
            <p className="font-normal text-lg leading-8 text-black">
              3 Items
            </p>
            <p className="font-medium text-lg leading-8 text-black">
              $480.00
            </p>
          </div>
          <form>
            <Label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
              Shipping
            </Label>
            <div className="flex pb-6">
              <div className="relative w-full">
                <div className=" absolute left-0 top-0 py-3 px-4">
                  <span className="font-normal text-base text-gray-300">
                    Second Delivery
                  </span>
                </div>
                <Input
                  type="text"
                  className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                  placeholder="$5.00"
                />
                <button
                  id="dropdown-button"
                  data-target="dropdown-delivery"
                  className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                  type="button"
                >
                  <svg
                    className="ml-2 my-auto"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                      stroke="#6B7280"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
              Promo Code
            </label>
            <div className="flex pb-4 w-full">
              <div className="relative w-full ">
                <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                <input
                  type="text"
                  className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                  placeholder="xxxx xxxx xxxx"
                />
                <button
                  id="dropdown-button"
                  data-target="dropdown"
                  className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                  type="button"
                >
                  <svg
                    className="ml-2 my-auto"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                      stroke="#6B7280"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center border-b border-gray-200">
              <Button className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                Apply
              </Button>
            </div>
            <div className="flex items-center justify-between py-8">
              <p className="font-medium text-xl leading-8 text-black">
                3 Items
              </p>
              <Label className="font-semibold text-xl leading-8 text-indigo-600">
                $485.00
              </Label>
            </div>
            <Button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
              Checkout
            </Button>
          </form>
        </div>
      </div>
    )
}

export default OrderCart;