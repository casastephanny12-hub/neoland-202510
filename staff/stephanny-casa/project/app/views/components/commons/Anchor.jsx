export function Anchor({ children, className, onClick }) {
    return <a className={`cursos-pointer font-bold text-sm ${className}`} href="" onClick={onClick}>{children}</a>
}