export function Button ({ children, type, className, onClick, id }) {
    return <button id={id} className={`border-3 rounded-sm border-solid border-orange-500 bg-orange-200 ${className}`} type={type} onClick={onClick}>{children}</button> 
}

