export function Input({ alias, autoComplete, type, className, value, onChange }) {
    if (type === 'textarea') {
        return <textarea
            id={alias}
            name={alias}
            autoComplete={autoComplete || alias} type={type}
            className={`border border-gray-400 py-1 rounded-xl p-2  ${className}`} />
    }

    return <input
        id={alias}
        name={alias}
        autoComplete={autoComplete || alias}
        type={type}
        value={value}
        onChange={onChange}
        className={`border border-gray-400 py-1 rounded-xl p-2  ${className}`}
     />
}