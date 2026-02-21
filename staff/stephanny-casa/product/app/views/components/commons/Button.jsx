export function Button ({ children, type, className, onClick, id, ...props }) {
    return <button id={id} className={`border-3 rounded-sm border-solid border-orange-500 bg-orange-200 ${className}`} type={type} onClick={onClick} {...props}>{children}</button> 
}

