
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

const HeroWrapper: FC = () => {
    return (
        <header className="header lg:top-10 top-0 ">
        <div className="header-left-side">
          <div className="header-content">
            <h1>An Industrial Take on Streetwear</h1>
            <p className="">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <div className="flex flex-col-reverse gap-2 lg:flex-row">
              <Link href={"/products"}>
                <button className="h-full w-full rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-4 py-2 text-white">
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
  
          {/** featurd image section */}
          <div className="header-featured lg:mt-auto mt-[20px] ">
            <Image src={feature1} width={100} height={35} alt="img" />
            <Image src={feature2} width={100} height={35} alt="img" />
            <Image src={feature3} width={100} height={35} alt="img" />
            <Image src={feature4} width={100} height={35} alt="img" />
          </div>
        </div>
        <div className="header-right-side hidden lg:flex ">
          <div className="header-circle">
            <Image
              className="header-img"
              src={header}
              width={650}
              height={650}
              alt="header image"
            />
          </div>
        </div>
      </header>
    );
};

export default HeroWrapper;
