export function Label({ alias, children }){
    return <label htmlFor={alias} className="font-bold text-gray-400 mb-2">{children}</label>
}