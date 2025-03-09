import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={twMerge(
                'size-20 rounded-full overflow-hidden bg-neutral-900 border-4 border-blue-400 p-1',
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}
