import { Button } from '@/components/ui/button';
import { FC } from 'react';

const HeroWrapper: FC = () => {
    return (
        <div className='relative flex min-h-screen'>
            <div className='container m-auto px-6 py-40 md:px-12 lg:px-7 lg:py-0'>
                <div className='flex flex-wrap items-center gap-12 lg:gap-0'>
                    <div className='space-y-8 lg:w-5/12'>
                        <span className='flex space-x-2'>
                            <span className='mb-2 block w-14 border-b-2 border-gray-600'></span>
                            <span className='font-medium text-gray-600 dark:text-gray-400'>
                                New this summer
                            </span>
                        </span>
                        <h1 className='text-4xl font-bold dark:text-white md:text-6xl'>
                            The New <br /> Way To Discover
                        </h1>
                        <p className='text-xl text-gray-700 dark:text-gray-300'>
                            Booking Company-Wide Savings, Invoicing and
                            reporting docs.
                        </p>

                        <div className='flex space-x-4'>
                            <Button
                                type='button'
                                title='Start buying'
                                className='w-full bg-gray-900 px-6 py-3 text-center transition hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-700 dark:bg-gray-700 sm:w-max'
                            >
                                <span className='block font-semibold text-white'>
                                    Shop now
                                </span>
                            </Button>
                            <Button
                                variant='secondary'
                                title='Start buying'
                                className='group w-full px-6 py-3 text-center transition focus:bg-yellow-100 active:bg-yellow-200 dark:focus:bg-yellow-900 dark:active:bg-yellow-800 sm:w-max'
                            >
                                <span className='block font-semibold text-gray-700 group-focus:text-yellow-700 dark:text-white dark:group-focus:text-yellow-100'>
                                    Our showreel
                                </span>
                            </Button>
                        </div>
                    </div>

                    <div className='relative hidden md:block lg:w-7/12'>
                        <div
                            aria-hidden='true'
                            className='absolute inset-0 m-auto h-[30rem] w-[30rem] rounded-full bg-yellow-200'
                        ></div>
                        <img
                            src='https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-thumbnail.png'
                            className='relative ml-auto'
                            alt='Shoes'
                        />
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 w-full'>
                <div className='container m-auto flex items-end justify-between px-6 md:px-12 lg:px-7'>
                    <a
                        href='#'
                        className='hidden space-x-4 md:flex md:items-center'
                    >
                        <img
                            className='h-14 w-14 rounded-full object-cover'
                            src='images/user.png'
                            alt='User'
                        />
                        <div className='text-gray-600 dark:text-gray-400'>
                            <span className='text-sm'>Question?</span>
                            <p className='font-semibold text-gray-700 dark:text-gray-300'>
                                Talk to our assistant
                            </p>
                        </div>
                    </a>
                    <div className='flex space-x-4'>
                        <a
                            href='#'
                            className='hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400'
                        >
                            Facebook
                        </a>
                        <span>/</span>
                        <a
                            href='#'
                            className='hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400'
                        >
                            YouTube
                        </a>
                        <span>/</span>
                        <a
                            href='#'
                            className='hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400'
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroWrapper;
