import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FC } from 'react';

const OrderCart: FC = () => {
    return (
        <div className='dark:bg-prim col-span-12 mx-auto w-full max-w-3xl bg-gray-50 py-24 max-xl:px-6 lg:pl-8 xl:col-span-4 xl:max-w-lg'>
            <h2 className='font-manrope border-b border-gray-300 pb-8 text-3xl font-bold leading-10 text-black'>
                Order Summary
            </h2>
            <div className='mt-8'>
                <div className='flex items-center justify-between pb-6'>
                    <p className='text-lg font-normal leading-8 text-black'>
                        3 Items
                    </p>
                    <p className='text-lg font-medium leading-8 text-black'>
                        $480.00
                    </p>
                </div>
                <form>
                    <Label className='mb-1.5 flex items-center text-sm font-medium text-gray-600'>
                        Shipping
                    </Label>
                    <div className='flex pb-6'>
                        <div className='relative w-full'>
                            <div className='absolute left-0 top-0 px-4 py-3'>
                                <span className='text-base font-normal text-gray-300'>
                                    Second Delivery
                                </span>
                            </div>
                            <Input
                                type='text'
                                className='shadow-xs block h-11 w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-36 pr-10 text-base font-normal text-gray-900 placeholder-gray-400 focus:outline-gray-400 min-[500px]:pl-52'
                                placeholder='$5.00'
                            />
                            <button
                                id='dropdown-button'
                                data-target='dropdown-delivery'
                                className='dropdown-toggle absolute right-0 top-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-4 pl-2 text-center text-base font-medium text-gray-900'
                                type='button'
                            >
                                <svg
                                    className='my-auto ml-2'
                                    width='12'
                                    height='7'
                                    viewBox='0 0 12 7'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5'
                                        stroke='#6B7280'
                                        stroke-width='1.5'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <label className='mb-1.5 flex items-center text-sm font-medium text-gray-400'>
                        Promo Code
                    </label>
                    <div className='flex w-full pb-4'>
                        <div className='relative w-full'>
                            <div className='absolute left-0 top-0 px-4 py-2.5 text-gray-300'></div>
                            <input
                                type='text'
                                className='shadow-xs block h-11 w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-5 pr-11 text-base font-normal text-gray-900 placeholder-gray-500 focus:outline-gray-400'
                                placeholder='xxxx xxxx xxxx'
                            />
                            <button
                                id='dropdown-button'
                                data-target='dropdown'
                                className='dropdown-toggle absolute right-0 top-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-4 pl-2 text-center text-base font-medium text-gray-900'
                                type='button'
                            >
                                <svg
                                    className='my-auto ml-2'
                                    width='12'
                                    height='7'
                                    viewBox='0 0 12 7'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5'
                                        stroke='#6B7280'
                                        stroke-width='1.5'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center border-b border-gray-200'>
                        <Button className='mb-8 w-full rounded-lg bg-black px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-500 hover:bg-black/80'>
                            Apply
                        </Button>
                    </div>
                    <div className='flex items-center justify-between py-8'>
                        <p className='text-xl font-medium leading-8 text-black'>
                            3 Items
                        </p>
                        <Label className='text-xl font-semibold leading-8 text-indigo-600'>
                            $485.00
                        </Label>
                    </div>
                    <Button className='w-full rounded-xl bg-indigo-600 px-6 py-3 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700'>
                        Checkout
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default OrderCart;
