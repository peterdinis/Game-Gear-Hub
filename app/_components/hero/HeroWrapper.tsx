import { Button } from "@/components/ui/button";
import { FC } from "react";

const HeroWrapper: FC = () => {
    return (
        <div className="min-h-screen flex relative">
            <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
                <div className="flex items-center flex-wrap gap-12 lg:gap-0">
                    <div className="lg:w-5/12 space-y-8">
                        <span className="flex space-x-2">
                            <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                            <span className="font-medium text-gray-600 dark:text-gray-400">New this summer</span>
                        </span>
                        <h1 className="text-4xl font-bold md:text-6xl dark:text-white">The New <br /> Way To Discover</h1>
                        <p className="text-xl text-gray-700 dark:text-gray-300">Booking Company-Wide Savings, Invoicing and reporting docs.</p>
                        
                        <div className="flex space-x-4">
                            <Button type="button" title="Start buying" className="w-full py-3 px-6 text-center transition bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                                <span className="block text-white font-semibold">
                                    Shop now
                                </span>
                            </Button>
                            <Button variant="secondary" title="Start buying" className="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                <span className="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                                    Our showreel
                                </span>
                            </Button>
                        </div>
                    </div>

                    <div className="hidden relative md:block lg:w-7/12">
                        <div aria-hidden="true" className="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200"></div>
                        <img src="https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-thumbnail.png" className="relative ml-auto" alt="Shoes" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 w-full">
                <div className="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
                    <a href="#" className="hidden space-x-4 md:flex md:items-center">
                        <img className="w-14 h-14 rounded-full object-cover" src="images/user.png" alt="User" />
                        <div className="text-gray-600 dark:text-gray-400">
                            <span className="text-sm">Question?</span>
                            <p className="font-semibold text-gray-700 dark:text-gray-300">Talk to our assistant</p>
                        </div>
                    </a>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">Facebook</a>
                        <span>/</span>
                        <a href="#" className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">YouTube</a>
                        <span>/</span>
                        <a href="#" className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroWrapper;