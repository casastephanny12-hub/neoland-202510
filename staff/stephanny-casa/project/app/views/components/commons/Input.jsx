export function Input({ alias, autoComplete, type, className, value, onChange, defaultValue }) {
    if (type === 'textarea') {
        return <textarea
            id={alias}
            name={alias}
            autoComplete={autoComplete || alias}
            type={type}
            className={`border border-gray-400 py-1 rounded-xl p-2  ${className}`}
            defaultValue={defaultValue} />
    }

    return <input
        id={alias}
        name={alias}
        autoComplete={autoComplete || alias}
        type={type}
        defaultValue={defaultValue}
        className={`border border-gray-400 py-1 rounded-xl p-2  ${className}`}
     />
}