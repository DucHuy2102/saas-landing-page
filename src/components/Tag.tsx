import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={twMerge(
                'inline-flex items-center border border-lime-400 gap-4 px-3 py-1 rounded-full text-lime-400 uppercase',
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className='text-sm'>{children}</span>
        </div>
    );
}
