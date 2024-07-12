import { FC } from 'react';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';

const ShoppingCart: FC = () => {
    return (
        <>
            <div className='col-span-12 w-full pb-8 pt-14 max-xl:mx-auto max-xl:max-w-3xl sm:mt-10 lg:py-24 lg:pr-8 xl:col-span-8'>
                <div className='flex items-center justify-between border-b border-gray-300 pb-8'>
                    <h2 className='font-manrope text-3xl font-bold leading-10 text-black dark:text-blue-50'>
                        Shopping Cart
                    </h2>
                    <h2 className='font-manrope text-xl font-bold leading-8 text-gray-600 dark:text-blue-50 sm:mr-4'>
                        3 Items
                    </h2>
                </div>
                <div className='mt-8 grid grid-cols-12 border-b border-gray-200 pb-6 max-md:hidden'>
                    <div className='col-span-12 md:col-span-7'>
                        <p className='text-lg font-normal leading-8 text-gray-400 dark:text-blue-50'>
                            Product Details
                        </p>
                    </div>
                    <div className='col-span-12 md:col-span-5'>
                        <div className='grid grid-cols-5'>
                            <div className='col-span-3'>
                                <p className='text-center text-lg font-normal leading-8 text-gray-400 dark:text-blue-50'>
                                    Quantity
                                </p>
                            </div>
                            <div className='col-span-2'>
                                <p className='text-center text-lg font-normal leading-8 text-gray-400 dark:text-blue-50'>
                                    Total
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center'>
                    <div className='w-full md:max-w-[126px]'>
                        <Image
                            src='https://pagedone.io/asset/uploads/1701162850.png'
                            alt='perfume bottle image'
                            className='mx-auto'
                            loading='lazy'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='grid w-full grid-cols-1 md:grid-cols-4'>
                        <div className='md:col-span-2'>
                            <div className='flex flex-col gap-3 max-[500px]:items-center'>
                                <h6 className='text-base font-semibold leading-7 text-black dark:text-blue-50'>
                                    Rose Petals Divine
                                </h6>
                                <h6 className='text-base font-normal leading-7 text-gray-500 dark:text-blue-50'>
                                    Perfumes
                                </h6>
                                <h6 className='text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600 dark:text-blue-50'>
                                    $120.00
                                </h6>
                            </div>
                        </div>
                        <div className='flex h-full items-center max-md:mt-3 max-[500px]:justify-center'>
                            <div className='flex h-full items-center'>
                                <button className='group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 max-sm:px-3 max-sm:py-2'>
                                    <Minus className='h-4 w-4 max-sm:h-3 max-sm:w-3' />
                                </button>
                                <span className='w-full min-w-[60px] max-w-[73px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-900 dark:text-blue-50 max-sm:min-w-[40px] max-sm:max-w-[50px] max-sm:py-2 max-sm:text-base'>
                                    1
                                </span>
                                <button className='group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 max-sm:px-3 max-sm:py-2'>
                                    <Plus className='h-4 w-4 max-sm:h-3 max-sm:w-3' />
                                </button>
                            </div>
                        </div>
                        <div className='flex h-full items-center max-md:mt-3 max-[500px]:justify-center md:justify-end'>
                            <p className='text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600 dark:text-blue-50'>
                                $120.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center'>
                    <div className='w-full md:max-w-[126px]'>
                        <Image
                            src='https://pagedone.io/asset/uploads/1701162850.png'
                            alt='perfume bottle image'
                            className='mx-auto'
                            loading='lazy'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='grid w-full grid-cols-1 md:grid-cols-4'>
                        <div className='md:col-span-2'>
                            <div className='flex flex-col gap-3 max-[500px]:items-center'>
                                <h6 className='text-base font-semibold leading-7 text-black dark:text-blue-50'>
                                    Rose Petals Divine
                                </h6>
                                <h6 className='text-base font-normal leading-7 text-gray-500 dark:text-blue-50'>
                                    Perfumes
                                </h6>
                                <h6 className='text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600 dark:text-blue-50'>
                                    $120.00
                                </h6>
                            </div>
                        </div>
                        <div className='flex h-full items-center max-md:mt-3 max-[500px]:justify-center'>
                            <div className='flex h-full items-center'>
                                <button className='group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 max-sm:px-3 max-sm:py-2'>
                                    <Minus className='h-4 w-4 max-sm:h-3 max-sm:w-3' />
                                </button>
                                <span className='w-full min-w-[60px] max-w-[73px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-900 dark:text-blue-50 max-sm:min-w-[40px] max-sm:max-w-[50px] max-sm:py-2 max-sm:text-base'>
                                    1
                                </span>
                                <button className='group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 max-sm:px-3 max-sm:py-2'>
                                    <Plus className='h-4 w-4 max-sm:h-3 max-sm:w-3' />
                                </button>
                            </div>
                        </div>
                        <div className='flex h-full items-center max-md:mt-3 max-[500px]:justify-center md:justify-end'>
                            <p className='text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600 dark:text-blue-50'>
                                $120.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center'>
                    <div className='w-full md:max-w-[126px]'>
                        <Image
                            src='https://pagedone.io/asset/uploads/1701162850.png'
                            alt='perfume bottle image'
                            className='mx-auto'
                            loading='lazy'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='grid w-full grid-cols-1 md:grid-cols-4'>
                        <div className='md:col-span-2'>
                            <div className='flex flex-col gap-3 max-[500px]:items-center'>
                                <h6 className='text-base font-semibold leading-7 text-black dark:text-blue-50'>
                                    Rose Petals Divine
                                </h6>
                                <h6 className='text-base font-normal leading-7 text-gray-500 dark:text-blue-50'>
                                    Perfumes
                                </h6>
                                <h6 className='text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600 dark:text-blue-50'>
                                    $120.00
                                </h6>
                            </div>
                        </div>
                        <div className='flex h-full items-center max-md:mt-3 max-[500px]:justify-center'>
                            <div className='flex h-full items-center'>
                                <button className='group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 max-sm:px-3 max-sm:py-2'>
                                    <Minus className='h-4 w-4 max-sm:h-3 max-sm:w-3' />
                                </button>
                                <span className='w-full min-w-[60px] max-w-[73px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-900 dark:text-blue-50 max-sm:min-w-[40px] max-sm:max-w-[50px] max-sm:py-2 max-sm:text-base'>
                                    1
                                </span>
                                <button className='group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 max-sm:px-3 max-sm:py-2'>
                                    <Plus className='h-4 w-4 max-sm:h-3 max-sm:w-3' />
                                </button>
                            </div>
                        </div>
                        <div className='flex h-full items-center max-md:mt-3 max-[500px]:justify-center md:justify-end'>
                            <p className='text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600 dark:text-blue-50'>
                                $120.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center'>
                    <div className='w-full md:max-w-[126px]'>
                        <Image
                            src='https://pagedone.io/asset/uploads/1701162850.png'
                            alt='perfume bottle image'
                            className='mx-auto'
                            loading='lazy'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='grid w-full grid-cols-1 md:grid-cols-4'>
                        <div className='md:col-span-2'>
                            <div className='flex flex-col gap-3 max-[500px]:items-center'>
                                <h6 className='text-base font-semibold leading-7 text-black dark:text-blue-50'>
                                    Rose Petals Divine
                                </h6>
                                <h6 className='text-base font-normal leading-7 text-gray-500 dark:text-blue-50'>
                                    Perfumes
                                </h6>
                                <h6 className='text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600 dark:text-blue-50'>
                                    $120.00
                                </h6>
                            </div>
                        </div>
                        <div className='flex h-full items-center max-md:mt-3 max-[500px]:justify-center'>
                            <div className='flex h-full items-center'>
                                <button className='group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 max-sm:px-3 max-sm:py-2'>
                                    <Minus className='h-4 w-4 max-sm:h-3 max-sm:w-3' />
                                </button>
                                <span className='w-full min-w-[60px] max-w-[73px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-900 dark:text-blue-50 max-sm:min-w-[40px] max-sm:max-w-[50px] max-sm:py-2 max-sm:text-base'>
                                    1
                                </span>
                                <button className='group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 max-sm:px-3 max-sm:py-2'>
                                    <Plus className='h-4 w-4 max-sm:h-3 max-sm:w-3' />
                                </button>
                            </div>
                        </div>
                        <div className='flex h-full items-center max-md:mt-3 max-[500px]:justify-center md:justify-end'>
                            <p className='text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600 dark:text-blue-50'>
                                $120.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
