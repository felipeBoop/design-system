import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    ClassName?: String;
}

export function Text({size = 'md', children, asChild, ClassName}: TextProps){
    const Comp = asChild ? Slot : 'span';

    return(
        <Comp className={clsx(
            "text-gray-100 font-sans", 
                {
                    'text-xs': size == 'sm',
                    'text-sm': size == 'md',
                    'text-md': size == 'lg',
                },
                ClassName,
            )}
        >
            {children}
        </Comp>
    );
}