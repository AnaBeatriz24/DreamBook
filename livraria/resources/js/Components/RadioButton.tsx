import { InputHTMLAttributes } from 'react';

export default function RadioButton({ className = '', children, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label>
            <input
                {...props}
                type="radio"
                className={
                    'rounded border-amber-900 text-amber-900 shadow-sm focus:ring-teal-900 ' +
                    className
                }
            />
            {
                children
            }
        </label>
    );
}
