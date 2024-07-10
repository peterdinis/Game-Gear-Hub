import { FC } from 'react';
import ShoppingCart from './ShoppingCart';
import OrderCart from './OrderCart';

const CartWrapper: FC = () => {
    return (
        <section className="after:contents-[''] relative z-10 after:absolute after:right-0 after:top-0 after:z-0 after:h-full after:bg-gray-50 xl:after:w-1/3">
            <div className='lg-6 relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5'>
                <div className='grid grid-cols-12'>
                    <ShoppingCart />
                    <OrderCart />
                </div>
            </div>
        </section>
    );
};

export default CartWrapper;
