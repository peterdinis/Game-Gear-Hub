'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';

const ThemeButton: FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            onClick={toggleTheme}
            className="relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-teal-500 p-1 dark:bg-gray-700"
        >
            <Moon className="h-4 w-4 fill-white" />
            <div
                id="toggleBtnTheme"
                className={`absolute h-6 w-6 rounded-full bg-white shadow-customShadow-md transition-transform ${
                    resolvedTheme === 'dark' ? 'translate-x-8' : 'translate-x-0'
                }`}
            ></div>
            <Sun className="ml-auto h-4 w-4 fill-white" />
        </div>
    );
};

export default ThemeButton;