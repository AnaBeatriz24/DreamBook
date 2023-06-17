import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-amber-900 text-amber-900 shadow-sm focus:ring-teal-900 ' +
                className
            }
        />
    );
}
