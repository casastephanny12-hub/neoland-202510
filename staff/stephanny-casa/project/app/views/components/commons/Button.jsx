export function Button({children, type, className, onClick, id, ...props}){
    return <button id={id} className={`w-10 h-10 bg-black text-white px-1 ${className}`} type={type}
    onClick={onClick} {...props}>{children}</button>
}