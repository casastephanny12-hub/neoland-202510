export function Anchor({ children, className, onClick }) {
    return <a className={`cursor-pointer ${className}`} href="" onClick={onClick}>{children}</a>
}