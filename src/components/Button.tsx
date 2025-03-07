import { ButtonHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

const classes = cva('border px-6 rounded-full h-12 font-medium cursor-pointer', {
    variants: {
        variant: {
            primary: 'bg-lime-400 border-lime-400 text-neutral-950',
            secondary: 'bg-transparent border-white text-white',
        },
        size: {
            sm: 'h-10',
        },
    },
});

export default function Button(
    props: {
        variant: 'primary' | 'secondary';
        size?: 'sm';
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, size, className, ...otherProps } = props;
    return <button className={classes({ variant, className })} {...otherProps} />;
}
