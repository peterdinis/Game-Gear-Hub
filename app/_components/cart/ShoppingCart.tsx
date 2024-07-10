import { FC } from "react";
import Image from "next/image";
import {Minus, Plus} from "lucide-react";

const ShoppingCart: FC = () => {
    return (
        <>
        <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope dark:text-blue-50 font-bold text-3xl leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 dark:text-blue-50 text-gray-600">
                3 Items
              </h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400 dark:text-blue-50">
                  Product Details
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 dark:text-blue-50 text-center">
                      Quantity
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 dark:text-blue-50 text-center">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
              <div className="w-full md:max-w-[126px]">
                <Image
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black dark:text-blue-50">
                      Rose Petals Divine
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500 dark:text-blue-50">
                      Perfumes
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 dark:text-blue-50 transition-all duration-300 group-hover:text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <Minus />
                    </button>
                    <span
                      className="border-y border-gray-200 outline-none text-gray-900 dark:text-blue-50 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                    >1</span>
                    <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <Plus />
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-gray-600 dark:text-blue-50 text-center transition-all duration-300 group-hover:text-indigo-600">
                    $120.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
              <div className="w-full md:max-w-[126px]">
                <Image
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black dark:text-blue-50">
                      Rose Petals Divine
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500 dark:text-blue-50">
                      Perfumes
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 dark:text-blue-50 transition-all duration-300 group-hover:text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <Minus />
                    </button>
                    <span
                      className="border-y border-gray-200 outline-none text-gray-900 dark:text-blue-50 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                    >1</span>
                    <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <Plus />
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-gray-600 dark:text-blue-50 text-center transition-all duration-300 group-hover:text-indigo-600">
                    $120.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
              <div className="w-full md:max-w-[126px]">
                <Image
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black dark:text-blue-50">
                      Rose Petals Divine
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500 dark:text-blue-50">
                      Perfumes
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 dark:text-blue-50 transition-all duration-300 group-hover:text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <Minus />
                    </button>
                    <span
                      className="border-y border-gray-200 outline-none text-gray-900 dark:text-blue-50 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                    >1</span>
                    <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <Plus />
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-gray-600 dark:text-blue-50 text-center transition-all duration-300 group-hover:text-indigo-600">
                    $120.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
              <div className="w-full md:max-w-[126px]">
                <Image
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black dark:text-blue-50">
                      Rose Petals Divine
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500 dark:text-blue-50">
                      Perfumes
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 dark:text-blue-50 transition-all duration-300 group-hover:text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <Minus />
                    </button>
                    <span
                      className="border-y border-gray-200 outline-none text-gray-900 dark:text-blue-50 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                    >1</span>
                    <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <Plus />
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-gray-600 dark:text-blue-50 text-center transition-all duration-300 group-hover:text-indigo-600">
                    $120.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default ShoppingCart;