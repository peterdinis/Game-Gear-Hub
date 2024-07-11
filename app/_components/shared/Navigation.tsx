import Link from 'next/link';
import { FC } from 'react';
import { Computer, ShoppingCart } from 'lucide-react';
import ThemeButton from './ThemeButton';

const Navigation: FC = () => {
    return (
        <header>
            <input
                type="checkbox"
                name="hbr"
                id="hbr"
                className="hbr peer"
                hidden
                aria-hidden="true"
            />
            <nav className="navbar peer-checked:navbar-active fixed z-20 w-full bg-white/80 shadow-md shadow-gray-600/5 backdrop-blur dark:bg-gray-900/80 dark:shadow-none md:relative md:bg-transparent">
                <div className="m-auto px-6 xl:container md:px-12">
                    <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0 md:py-3">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a
                                href="#"
                                aria-label="logo"
                                className="flex items-center space-x-2"
                            >
                                <div aria-hidden="true" className="flex space-x-1">
                                    <Computer />
                                </div>
                                <span className="text-base font-bold text-gray-600 dark:text-white">
                                    Game-Gear-Hub
                                </span>
                            </a>
                            <label
                                htmlFor="hbr"
                                className="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden"
                            >
                                <div
                                    aria-hidden="true"
                                    className="m-auto h-0.5 w-6 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
                                ></div>
                                <div
                                    aria-hidden="true"
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
                                ></div>
                            </label>
                        </div>
                        <div className="navmenu mb-16 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-300/20 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none md:flex-nowrap lg:m-0 lg:flex lg:w-7/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                                    <li>
                                        <Link href="/" className="dark:hover:text-primaryLight block transition hover:text-primary md:px-4">
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/games" className="dark:hover:text-primaryLight block transition hover:text-primary md:px-4">
                                            <span>Games</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cart" className="dark:hover:text-primaryLight flex items-center space-x-1 transition hover:text-primary md:px-4">
                                            <ShoppingCart />
                                            <span className="ml-4">0</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="-ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:space-y-0 lg:border-l">
                                <Link
                                    href="/sign-up"
                                    className="dark:focus:before:bg-primaryLight/10 relative ml-auto flex h-9 items-center justify-center before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 focus:before:bg-primary/10 active:duration-75 active:before:scale-95 sm:px-6"
                                >
                                    <span className="dark:text-primaryLight relative text-sm font-semibold text-primary">
                                        Sign Up
                                    </span>
                                </Link>
                                <Link
                                    href="/sign-in"
                                    className="dark:before:bg-primaryLight relative ml-4 flex h-9 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:px-6"
                                >
                                    <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                                        Login
                                    </span>
                                </Link>
                                <div className="relative ml-auto flex h-9 items-center justify-center before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:px-6">
                                    <ThemeButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;