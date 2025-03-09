import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={twMerge(
                'inline-flex justify-center items-center bg-neutral-300 size-14 rounded-2xl text-xl text-neutral-950 font-medium',
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}
