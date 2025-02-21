import './Button.css';

export default function Button({ className, children = 'shop now', href= '#', ...props}) {


    return (
        <a 
        href={href}
        className={`button ${className}`}
        target="_blank"

        >
            {children}
        </a>
    )
}