import { FC } from 'react';

interface IHeaderProps {
    text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
    return (
        <h1 className="mt-24 text-center text-4xl font-extrabold tracking-tight lg:mt-10 lg:text-5xl">
            {text}
        </h1>
    );
};

export default Header;