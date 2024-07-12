import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import ThemeButton from '../ThemeButton';
import { GamepadIcon, ShoppingCartIcon, MenuIcon } from 'lucide-react';

const Navigation: FC = () => {
    return (
        <header className='sticky top-0 z-50 w-full bg-background shadow-sm'>
            <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
                <Link
                    href='/'
                    className='flex items-center gap-2'
                    prefetch={false}
                >
                    <GamepadIcon className='h-6 w-6 text-primary' />
                    <span className='text-lg font-semibold'>Game Gear Hub</span>
                </Link>
                <nav className='hidden items-center gap-6 md:flex'>
                    <Link
                        href='/games'
                        className='text-sm font-medium transition-colors hover:text-primary'
                        prefetch={false}
                    >
                        Games
                    </Link>
                    <Link
                        href='/login'
                        className='text-sm font-medium transition-colors hover:text-primary'
                        prefetch={false}
                    >
                        Sign In
                    </Link>
                    <Link
                        href='/register'
                        className='text-sm font-medium transition-colors hover:text-primary'
                        prefetch={false}
                    >
                        Sign Up
                    </Link>
                </nav>
                <div className='relative hidden items-center gap-4 md:flex'>
                    <Link href='/cart' className='relative' prefetch={false}>
                        <ShoppingCartIcon className='h-6 w-6 text-muted-foreground' />
                        <Badge className='absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground'>
                            3
                        </Badge>
                    </Link>
                    <ThemeButton />
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant='outline'
                            size='icon'
                            className='md:hidden'
                        >
                            <MenuIcon className='h-6 w-6' />
                            <span className='sr-only'>Toggle navigation</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left' className='md:hidden'>
                        <div className='flex flex-col items-start gap-4 p-4'>
                            <Link
                                href='#'
                                className='flex items-center gap-2'
                                prefetch={false}
                            >
                                <GamepadIcon className='h-6 w-6 text-primary' />
                                <span className='text-lg font-semibold'>
                                    GameShop
                                </span>
                            </Link>
                            <nav className='grid gap-2'>
                                <Link
                                    href='/games'
                                    className='text-sm font-medium transition-colors hover:text-primary'
                                    prefetch={false}
                                >
                                    Games
                                </Link>
                                <Link
                                    href='/login'
                                    className='text-sm font-medium transition-colors hover:text-primary'
                                    prefetch={false}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href='/register'
                                    className='text-sm font-medium transition-colors hover:text-primary'
                                    prefetch={false}
                                >
                                    Sign Up
                                </Link>
                            </nav>
                            <Link
                                href='#'
                                className='relative'
                                prefetch={false}
                            >
                                <ShoppingCartIcon className='h-6 w-6 text-muted-foreground' />
                                <Badge className='absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground'>
                                    3
                                </Badge>
                            </Link>
                            <div className='mt-5'>
                                <ThemeButton />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Navigation;
