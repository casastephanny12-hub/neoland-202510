export function ButtonPassword({children, type, className, onClick, id, ...props}){
    return <button id={id} className={`${className}`} type={type}
    onClick={onClick} {...props}>{children}</button>
}